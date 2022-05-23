import React from "react";
import CardAddForm from "../\bCardAddForm/cardAddForm";
import CardForm from "../CardForm/cardForm";
import styles from "./editor.module.css";
export default function Editor({ cards, addCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Edit</h1>
      {
        cards.map(card =>(
          <CardForm key = {card.id} card={card}/>
        ))
      }
      <CardAddForm onAdd={addCard}/>
    </section>
  );
}
