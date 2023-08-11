import { BtnHeader } from "../../components/BtnHeader";
import { NavBar } from "../../components/NavBar";
import style from "../HomePage/style.module.scss";

export const Homepage = ({ user, userLogout }) => {
  return (
    <main className={style.container}>
      <section className={style.logoHome}>
        <div>
          <NavBar>
            <BtnHeader userLogout={userLogout} />
          </NavBar>
        </div>
        <nav>
          <h2 className="title one">OLÁ, {user?.name} ❤️</h2>
        </nav>
        <h3 className="title one">Que pena! Estamos em desenvolvimento 🙁</h3>
        <p className="title two">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades!
          😊✅
        </p>
      </section>
    </main>
  );
};
