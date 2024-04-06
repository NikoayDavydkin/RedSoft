import styles from "./LoginPage.module.scss";
import React from "react";
import Header from "../../components/Header/Header";
import { FieldError, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    const user = {
      email: data.emailAddress,
      password: data.password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "LOG_THE_SYSTEM" });
    reset();
    navigate("/");
  };

  return (
    <div className={styles.login}>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formLogin}>
        <input
          className={styles.inputs}
          {...register("emailAddress", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              message: "not valid email",
            },
          })}
          placeholder="Email address"
          type="email"
        ></input>
        <div className={styles.errorsInfo}>
          {errors?.emailAddress && (
            <p>{(errors?.emailAddress as FieldError)?.message || "Error!"}</p>
          )}
        </div>

        <input
          className={styles.inputs}
          {...register("password", {
            minLength: {
              value: 7,
              message: "Less than 7 characters entered",
            },
          })}
          type="password"
          placeholder="New Password"
        ></input>
        <div className={styles.errorsInfo}>
          {errors?.password && (
            <p>{(errors?.password as FieldError)?.message || "Error!"}</p>
          )}
        </div>

        <button
          className={styles.buttonSubmit}
          type="submit"
          disabled={!isValid}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
