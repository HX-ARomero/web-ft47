import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const GETCHARACTERBYID = "https://dragonball-api.com/api/characters/";

export default function Detail(props) {

  const params = useParams();
  const { id } = params;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(GETCHARACTERBYID + id)
      .then(({data}) => data)
      .then(chracterById => setCharacter(chracterById))
      .catch(error => console.log(error.message));    
  }, []);

  useEffect(() => () => {
    setCharacter({});
  }, []);

  return (
    <div className={styles.container}>
      <h2>Detalle</h2>
      <hr />
      <h3>Nombre: {character.name}</h3>
      <h4>Ki: {character.ki}</h4>
      <h4>Género: {character.gender}</h4>
      <h4>Raza: {character.race}</h4>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
