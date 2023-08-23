import { useContext, useState } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import { DefaultTemplate } from "./components/DefaultTemplete";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { TodoContext } from "./providers/TodoContextLogin";
import { Loading } from "./Loading";

const App = () => {
  const { loading } = useContext(TodoContext);
  return (
    <>
      <DefaultTemplate>
        {loading ? <Loading /> : <RoutesMain />}
      </DefaultTemplate>
      <ToastContainer autoClose={3000} position="bottom-left" theme="dark" />
    </>
  );
};

export default App;
