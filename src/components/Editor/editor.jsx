import React from "react";
import CardAddForm from "../\bCardAddForm/cardAddForm";
import CardForm from "../CardForm/cardForm";
import styles from "./editor.module.css";
export default function Editor({ cards, addCard, updateCard, deleteCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Edit</h1>
      {Object.keys(cards).map((key) => (
        <CardForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
}
