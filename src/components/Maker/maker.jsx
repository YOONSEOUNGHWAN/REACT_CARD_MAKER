import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../Editor/editor";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Preview from "../Preview/preview";
import styles from "./maker.module.css";

export default function Maker({ authService }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "yoon",
      company: "naver",
      theme: "dark",
      title: "engineer",
      email: "seoung59@gmail.com",
      message: "go for it",
      fileName: "yoon",
      fileURL: null,
    },
    {
      id: "2",
      name: "yoon",
      company: "naver",
      theme: "light",
      title: "engineer",
      email: "seoung59@gmail.com",
      message: "go for it",
      fileName: "yoon",
      fileURL: null,
    },
    {
      id: "3",
      name: "yoon",
      company: "naver",
      theme: "colorful",
      title: "engineer",
      email: "seoung59@gmail.com",
      message: "go for it",
      fileName: "yoon",
      fileURL: null,
    },
  ]);
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
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}
