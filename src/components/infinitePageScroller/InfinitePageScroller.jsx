import React, { useState, useEffect, useRef, memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box} from "@mui/material";
import { useTranslation } from "react-i18next";
import MyCircularProgress from "../progressbar/MyCircularProgress";
import { SecondaryText } from "../../assets/css/common.styles";

const InfinitePageScroller = (props) => {
  const { renderData, hasMore, fetchMoreData,renderComponent } = props;
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <InfiniteScroll
      dataLength={items?.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        hasMore ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop={4}
          >
            <Box>
              <MyCircularProgress />
              <SecondaryText >{t("scrollDown")}</SecondaryText>
            </Box>
          </Box>
        ) : null
      }
      scrollableTarget={scrollableContainerRef.current}
      scrollThreshold={0.5}
      scrollEvent={false}
    >
      <Box
        ref={scrollableContainerRef}
        onScroll={handleScroll}
      >
        
          {items?.map((game,ind) => (
            <Box key={ind}>
              {renderComponent(game)}
            </Box>
          ))}
      </Box>
    </InfiniteScroll>
  );
};

InfinitePageScroller.defaultProps = {
  renderData: [],
  hasMore: true,
  fetchMoreData: () => {},
  renderComponent :""
};

export default memo(InfinitePageScroller);
