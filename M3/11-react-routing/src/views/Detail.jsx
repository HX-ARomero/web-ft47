import React from "react";
import styles from "../styles/styles.module.css";

export default function Detail(props) {
  return (
    <div className={styles.container}>
      <h2>Detalle</h2>
      <hr />
      <h3>Nombre: </h3>
      <h4>Ki: </h4>
      <h4>Género: </h4>
      <h4>Raza: </h4>
      <img src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="Anonimo" />
    </div>
  );
}
