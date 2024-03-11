import React from "react";
import styles from "../styles/styles.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className={styles.navbarContainer}>
      <img
        src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
        alt="logo"
      />
      <p>Dragon Ball API</p>
      <NavLink
        to="/home"
        className={({isActive}) => isActive && styles.active}
      >
        <span>Personajes</span>
      </NavLink>
      <NavLink
        to="/about"
        className={({isActive}) => isActive && styles.active}
      >
        <span>Sobre la APP</span>
      </NavLink>
    </div>
  );
}
