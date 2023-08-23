import { useContext } from "react";
import { BtnHeader } from "../../components/BtnHeader";
import { NavBar } from "../../components/NavBar";
import style from "../HomePage/style.module.scss";
import { TodoContext } from "../../providers/TodoContextLogin";
import { TechList } from "../../components/TechList";

export const Homepage = () => {
  const { user, userLogout } = useContext(TodoContext);
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
          <p className="label">{user?.course_module}</p>
        </nav>

        <TechList />
      </section>
    </main>
  );
};
