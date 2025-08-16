import { Navigate } from "react-router-dom";
import { privatePaths } from "config/routes";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("access_token")) {
    return <Navigate to={Object.values(privatePaths)[0]} replace />;
  }

  return children;
};

export default PublicRoute;
