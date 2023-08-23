import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { TodoContext } from "../../providers/TodoContextLogin";
import { TechProvider } from "../../providers/TechContext";

export const PrivateRoutes = () => {
  const { user } = useContext(TodoContext);

  return user ? (
    <TechProvider>
      <Outlet />
    </TechProvider>
  ) : (
    <Navigate to="/" />
  );
};
