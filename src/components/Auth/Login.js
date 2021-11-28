import { Password } from "@mui/icons-material";
import React, { useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/css/Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useAuth();

  return (
    <>
      <section className="login">
        <div className="loginContainer">
          <label htmlFor="" className="authLabel">
            Почта пользователя
          </label>
          <input
            type="text"
            className="authInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <p className="errorMsg">{emailError}</p>
          <label htmlFor="" className="authLabel">
            Пароль
          </label>
          <input
            type="password"
            className="authInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="authButton" onClick={handleLogIn}>
                  Войти
                </button>
                <p className="authP">
                  Нету аккаунта?{" "}
                  <span
                    className="authSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Регистрация
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="authButton" onClick={handleSignUp}>
                 Войти
                </button>
                <p className="authP">
                  Есть аккаунт?{" "}
                  <span
                    className="authSpan"
                    onClick={() => {
                      console.log(1);
                      setHasAccount(!hasAccount);
                    }}
                  >
                    Войти
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
