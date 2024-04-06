import styles from "./Header.module.scss";
import logo from '../../img/logo.png';
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import { returnNameButtons } from "../../functions";
import { useSelector } from "react-redux";
import { IDeafaultState } from "../../types";

const Header = () => {
  const page = useLocation();
  const logined = useSelector((state: IDeafaultState) => state.logined);

  return (
    <header className={styles.header}>
      <Button text={returnNameButtons(page.pathname, logined)[0]} />

      <img className={styles.logo} src={logo} alt="logo" />

      <Button text={returnNameButtons(page.pathname, logined)[1]} />
    </header>
  );
};

export default Header;
