import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PublicRoutes } from "./PublicRotes";
import { PrivateRoutes } from "./PrivateRotes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Homepage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
