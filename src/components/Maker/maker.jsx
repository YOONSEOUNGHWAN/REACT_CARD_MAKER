import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import styles from "./maker.module.css";

export default function Maker({ authService }) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
}
