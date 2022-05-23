import React from "react";
import Button from "../Button/button";
import ImageInput from "../Button/img_button";
import styles from "./cardForm.module.css";
export default function CardForm({ card }) {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input
        className={styles.input}
        type="text"
        name="  email"
        value={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.imgInput}>
        <ImageInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
}
