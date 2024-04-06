import styles from "./Button.module.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IDeafaultState } from "../../types";

interface ComponentProps {
  text: string;
}

const Button: React.FC<ComponentProps> = ({ text }) => {
  const dispatch = useDispatch();
  const logined = useSelector((state: IDeafaultState) => state.logined);
  const navigate = useNavigate();

  interface IMapPages {
    [key: string]: string;
    Авторизация: string;
    "Страница с данными": string;
    "На главную": string;
    Выйти: string;
  }

  const mapPages: IMapPages = {
    Авторизация: "/login",
    "Страница с данными": "/browse",
    "На главную": "/",
    Выйти: "/",
  };

  const user = {
    email: "12345@gmail.com",
    password: "12345",
  };

  return (
    <button
      onClick={() => {
        if (text === "Выйти") {
          localStorage.removeItem("user");
          dispatch({ type: "LOG_OUT_THE_SYSTEM" });
        }
        navigate(mapPages[text]);
      }}
      className={styles.button}
    >
      {text}
    </button>
  );
};

export default Button;