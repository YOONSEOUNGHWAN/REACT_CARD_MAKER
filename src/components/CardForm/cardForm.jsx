import React from "react";
import Button from "../Button/button";
// 컴포넌트로 button받아왔으니 필요없음
// import ImageInput from "../Button/img_button";
import styles from "./cardForm.module.css";
export default function CardForm({ FileInput, card, updateCard, deleteCard }) {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="  email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      />
      <div className={styles.imgInput}>
        <FileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
}
