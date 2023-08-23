import loading from "../assets/loading.svg";
import styles from "../Loading/style.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <img src={loading} alt="carregando..." />
    </div>
  );
};
