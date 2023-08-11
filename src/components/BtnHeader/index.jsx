import { Link, useNavigate } from "react-router-dom";
export const BtnHeader = ({ userLogout }) => {
  return (
    <Link to="/login" onClick={(e) => userLogout()}>
      Sair
    </Link>
  );
};
