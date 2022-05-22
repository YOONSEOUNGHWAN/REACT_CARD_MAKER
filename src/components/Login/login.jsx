import React from "react";
import {useEffect} from "react";

import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import styles from "./login.module.css";
export default function Login({ authService }) {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate("/maker", {
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <div className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}
