import styles from "../NavBar/style.module.scss";
export const NavBar = ({ children }) => {
  return (
    <div className={styles.logo}>
      <h1>Kenzie Hub</h1>
      {children}
    </div>
  );
};
