import React, { memo } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const SearchBox = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return isSmallScreen ? (
    <IconButton size="large" aria-label="search" color="inherit">
      <SearchIcon />
    </IconButton>
  ) : (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default memo(SearchBox);
