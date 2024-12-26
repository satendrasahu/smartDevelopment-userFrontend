import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from "@mui/material";
import { colors } from "../../../../theme/colors";
import { ROUTE_PATHS } from "../../../../routes/routesPath";
import { appDetails } from "../../../../utils/common.Data";

const Header = ({ activeTab, setActiveTab, renderTabList, tabListRef,handleTabClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: colors.primary.mainColor,
        zIndex: 999,
      }}
    >
      <Toolbar
        sx={{
          paddingX: { xs: "0.5rem", sm: "1rem" },
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            marginRight: "1rem",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTE_PATHS.home}
            
            sx={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "monospace",
              textDecoration: "none",
              textTransform: "none",
            }}
          >
            {appDetails.APP_NAME}
          </Typography>
        </Box>

        <Tabs
          ref={tabListRef}
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          textColor="inherit"
          indicatorColor="secondary"
          // sx={{
          //   flexGrow: 1,
          //   overflow: "auto",
          // }}
        >
          {renderTabList.map((section) => (
            <Tab
              key={section.id}
              data-id={section.id}
              label={section.name}
              onClick={() => handleTabClick(section.id)}
              sx={{
                color:
                  activeTab === section.id
                    ? colors.extra.highLightColor
                    : "white",
                textTransform: "none",
                transition: "color 0.3s",
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
