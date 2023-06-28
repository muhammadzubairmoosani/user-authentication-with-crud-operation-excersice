import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { checkAuthState } from "../services";
import { Layout } from "./layout";
import { LinearLoader } from "./loader";
import { Login } from "./login";
import { PageNotFound } from "./pageNotFound";

export const AuthProvider = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.authState);

  useEffect(() => {
    dispatch(checkAuthState());
  }, []);

  if (loading) return <LinearLoader />;

  return (
    <Routes>
      <Route
        path="/"
        element={!user ? <Login /> : <Navigate replace to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Layout /> : <Navigate replace to="/" />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
