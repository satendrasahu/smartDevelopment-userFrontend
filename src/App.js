import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import PageNotFound from "./components/ui_kit/notFound/PageNotFound.404";
import { routersList } from "./routes/routeList";
import RouteValidator from "./routes/RouteValidator";

const renderRoutes = (routersList) => {
  const result = routersList?.map(({ path, key, nestedRoutes, ...props }) => {
    return (
      <Route
        path={path}
        key={key}
        exact
        element={<RouteValidator path={path} {...props} />}
      >
        {nestedRoutes && renderRoutes(nestedRoutes)}
      </Route>
    );
  });
  return result;
};

function App() {
  return (
    <Routes>
      {renderRoutes(routersList)}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
