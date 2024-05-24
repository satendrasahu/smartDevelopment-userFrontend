import PropTypes from "prop-types";
import { Suspense } from "react";
import PrivateRoutes from "./hoc/PrivateRoutes";
import PublicRoutes from "./hoc/PublicRoutes";
import { getAuthToken } from "../helpers/cookie.helpers";
import MainLoader from "../components/ui_kit/notFound/MainLoader";
import { useTranslation } from "react-i18next";
import ErrorBoundary from "../components/ui_kit/notFound/ErrorBoundary";

const SuspenseWrappedComponent = (Component) => {
  const {t} = useTranslation()
  const errorBoundaryMessage = {
    title: t("ooops"),
    subtitle: t("somethingWentWrong"),
    buttonTitle: t("refreshYourPage"),
  };
  return (
    <Suspense fallback={<MainLoader />}>
      <ErrorBoundary errorBoundaryMessage={errorBoundaryMessage}>
        <Component />
      </ErrorBoundary>
    </Suspense>
  );
};

const RouteValidator = ({ hasAuth, component, hasNavBar, ...otherProps }) => {
  const isAuthenticated = getAuthToken();

  return hasAuth ? (
    <PrivateRoutes
      isAuthenticated={isAuthenticated}
      Component={SuspenseWrappedComponent(component)}
      hasNavBar={hasNavBar}
    />
  ) : (
    <PublicRoutes Component={SuspenseWrappedComponent(component)} />
  );
};

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasAuth: PropTypes.bool,
  path: PropTypes.string,
};

export default RouteValidator;
