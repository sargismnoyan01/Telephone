import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicPaths, privatePaths } from "config/routes";
import { observer } from "mobx-react-lite";

import PrivateRoute from "core/PrivateRoute";
import PublicRoute from "core/PublicRoute";

const LoginPage = lazy(() => import("pages/AuthPages/Login"));
const RegistrationPage = lazy(() => import("pages/AuthPages/Registration"));

const ProductsPage = lazy(() => import("pages/ProductsPage"));
const MarksPage = lazy(() => import("pages/MarksPage"));

const publicRoutes = [
  { path: publicPaths.login, Component: <LoginPage /> },
  { path: publicPaths.registration, Component: <RegistrationPage /> },
];

const privateRoutes = [
  {
    path: privatePaths.products,
    Component: <ProductsPage />,
  },
  {
    path: privatePaths.marks,
    Component: <MarksPage />,
  },
];

const App = () => {
  return (
    <Routes>
      {privateRoutes?.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PrivateRoute>{route.Component}</PrivateRoute>}
        />
      ))}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PublicRoute>{route.Component}</PublicRoute>}
        />
      ))}
      <Route path="*" element={<Navigate to={publicPaths.login} replace />} />
      <Route
        exact
        path="/"
        element={<Navigate to={publicPaths.login} replace />}
      />
    </Routes>
  );
};

export default observer(App);
