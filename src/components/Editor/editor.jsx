import React from "react";
import CardForm from "../CardForm/cardForm";
import styles from "./editor.module.css";
export default function Editor({ cards }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Edit</h1>
      {
        cards.map(card =>(
          <CardForm card={card}/>
        ))
      }
    </section>
  );
}
