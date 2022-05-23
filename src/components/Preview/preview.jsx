import React from "react";
import Card from "../Card/card";
import styles from "./preview.module.css";

export default function Preview({ cards }) {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Preview</h1>
      {/* return을 안 해줘도 됨 {} => return 필요함 */}
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card card={cards[key]} key={key} />
        ))}
      </ul>
    </section>
  );
}
