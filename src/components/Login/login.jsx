import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import styles from "./login.module.css";
export default function Login({ onLogin }) {
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
