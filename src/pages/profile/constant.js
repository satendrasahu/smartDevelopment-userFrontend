import { ROUTE_PATHS } from "../../routes/routesPath";
import PersonalInformation from "./screens/personalInformation";
import PortFolioMaker from "./screens/portfolioMaker";

export const tabList = [
  {
    title: "personalDetails",
    path: ROUTE_PATHS.profile,
    tabIndex: 0,
    component: <PersonalInformation />,
  },

  // {
  //   title: "resumeMaker",
  //   // path: ROUTE_PATHS.resumeMaker,
  // },
  {
    title: "Design Profile",
    // path: ROUTE_PATHS.portfolioMaker,
    tabIndex: 1,
    component: <PortFolioMaker />,
  },

  {
    title: "casinoTransactions",
    path: ROUTE_PATHS.profile,
    tabIndex: 2,
  },
];
