import { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshingCurrentUser } from "./redux/auth/auth-selectors";
import { refreshCurrentUser } from "./redux/auth/auth-operations";

import { PublicRoute, PrivateRoute } from "./components/AuthRouts";

import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LogInPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(selectIsRefreshingCurrentUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LogInPage />} />
          </Route>
        </Route>
      </Routes>
    )
  );
}

export default App;
