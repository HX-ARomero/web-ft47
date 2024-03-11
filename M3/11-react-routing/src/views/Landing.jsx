import React from "react";
import styles from "../styles/styles.module.css";
import { Link } from "react-router-dom";

export default function Landing(props) {
  return (
    <div className={styles.container}>
      <h1>Dragon Ball APP</h1>
      <img src="https://qph.cf2.quoracdn.net/main-qimg-bddc3d8428557eac26dc50f57e0de193" alt="" />
      <br />
      <Link to="/home">
        <span>Ingresar...</span>
      </Link>
    </div>
  );
};