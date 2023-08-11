import { Route, Routes, useNavigate } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { useEffect, useState } from "react";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = ({ setIsLogin, setIsRegister }) => {
  const [user, setUser] = useState(null);

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@token");
  };

  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("@token");
    if (!isLogin) {
      navigate("login");
    }
  }, []);

  console.log(user);
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage userLogout={userLogout} user={user} />}
      />
      <Route
        path="/login"
        element={
          <LoginPage user={user} setUser={setUser} setIsLogin={setIsLogin} />
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
