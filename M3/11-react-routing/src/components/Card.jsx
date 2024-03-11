import React from "react";
import styles from "../styles/styles.module.css";

export default function Card({ character }) {
  return (
    <div className={styles.cardContainer}>
      <h3>{character.name}</h3>
    </div>
  );
}
