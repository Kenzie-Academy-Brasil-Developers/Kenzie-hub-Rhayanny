import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { TodoContext } from "../../providers/TodoContextLogin";

export const PublicRoutes = () =>{
    const {user} = useContext(TodoContext);

    return !user ? <Outlet/> : <Navigate to="/"/>
};