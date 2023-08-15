import { useContext } from "react";
import { TodoContext } from "../providers/TodoContextLogin";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoutes = () => {
  const { user } = useContext(TodoContext);
  return user ? <Outlet /> : <Navigate to="/" />;
};
