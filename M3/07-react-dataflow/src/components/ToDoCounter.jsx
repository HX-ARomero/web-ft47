import React from "react";

export default function ToDoCounter({titulo, contadorEstado}) {
  
  return (
    <div style={{backgroundColor: 'darkslateblue', padding: '5px'}}>
      <h2>{titulo} {contadorEstado}</h2>
    </div>
  )
}