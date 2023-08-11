import { useState } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import { DefaultTemplate } from "./components/DefaultTemplete";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const [islogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <DefaultTemplate>
        <RoutesMain setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
      </DefaultTemplate>
      <ToastContainer autoClose={3000} position="bottom-left" theme="dark" />
    </>
  );
};

export default App;
