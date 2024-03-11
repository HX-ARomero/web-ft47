import React from "react";
import styles from "../styles/styles.module.css";

export default function Navbar(props) {
  return (
    <div className={styles.navbarContainer}>
      <img
        src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
        alt="logo"
      />
      <p>Dragon Ball API</p>
      <span>Personajes</span>
      <span>Sobre la APP</span>
    </div>
  );
}
