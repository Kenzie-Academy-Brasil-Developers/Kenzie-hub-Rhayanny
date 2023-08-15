import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectRoutes } from "../protectRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/home" element={<ProtectRoutes />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
};
