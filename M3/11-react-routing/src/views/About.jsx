import React from "react";
import styles from "../styles/styles.module.css";

export default function About(props) {
  return (
    <div className={styles.container}>
      <h2>Sobre la App</h2>
      <hr />
      <h3>Cohorte FT47 - Marzo de 2024</h3>
      <h3>Tecnologías y recursos utilizados:</h3>
      <a href="https://es.react.dev/" target="_blank">
        <span>React</span>
      </a>
      <a href="https://reactrouter.com/en/main/" target="_blank">
        <span>React-Router-DOM</span>
      </a>
      <a href="https://web.dragonball-api.com/" target="_blank">
        <span>Dragon Ball API</span>
      </a>
        <img styles={{height: "20px"}} src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png" alt="react-router-dom" />
    </div>
  );
}