import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/auth-selectors";

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={"/create-post"} replace /> : <Outlet />;
};
