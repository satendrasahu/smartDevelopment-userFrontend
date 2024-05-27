import React, { useState, useEffect, useRef, memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AppLoader from "components/ui-kit/AppLoader/index";
import { LOADER_TYPE } from "constants/index";
import { colors } from "theme/colors/index";
import { Box, Grid, Typography } from "@mui/material";
import { viewAllSubCategoryUseStyle } from "./style";
import { GameCard } from "components/ui-kit/Gamecard/index";
import { useTranslation } from 'react-i18next';

const InfinitePageScroller = (props) => {
  const { renderData, hasMore, fetchMoreData } = props;
  const { t } = useTranslation()
  const [items, setItems] = useState([]);
  const subCatClasses = viewAllSubCategoryUseStyle();
  const scrollableContainerRef = useRef(null);

  const handleScroll = () => {
    if (
      scrollableContainerRef.current.scrollTop === 0 &&
      hasMore &&
      scrollableContainerRef.current.scrollHeight >
      scrollableContainerRef.current.clientHeight
    ) {
      fetchMoreData();
    }
  };
  useEffect(() => {
    setItems(renderData);
  }, [renderData]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  return (
    <InfiniteScroll
      dataLength={items?.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={hasMore ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={4}
        >
          <Box>
            <AppLoader variant={LOADER_TYPE.PULSE} color={colors.white} />
            <Typography color={colors.white} >{t('scrollUp')}</Typography>
          </Box>
        </Box>
      ) : null}
      scrollableTarget={scrollableContainerRef.current}
      scrollThreshold={0.5}
      scrollEvent={false}
    >
      <Box ref={scrollableContainerRef} className="container" onScroll={handleScroll}>
        <Grid className={`${subCatClasses?.searchGamesWrap} ${subCatClasses?.viewAllPageWrap}`}>
          {items?.map((game) => (
            <Box key={game?.casinoGameId}>
              <GameCard game={game} />
            </Box>
          ))}
        </Grid>
      </Box>
    </InfiniteScroll>
  );
};

InfinitePageScroller.defaultProps = {
  renderData: [],
  hasMore: true,
  fetchMoreData: () => { }
};

export default memo(InfinitePageScroller);
