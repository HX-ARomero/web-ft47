import { useEffect, useState } from "react"
import Message from "./Message";

export default function CounterFunction() {

  const [counter, setCounter] = useState(0);
  const sumarUno = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log("CounterClass se actualizó, porque se modificó el estado counter");
  }, [counter]);

  return (
    <div>
      <h2>Contador de Función</h2>
      <h3>Contador: {counter}</h3>
      <button onClick={sumarUno}>Sumar 1</button>
      {
        counter > 2 && counter < 5 //* 3 ó 4
          ? <Message /> : null
      }
    </div>
  )
}