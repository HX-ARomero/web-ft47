export default function Tarjeta({personaje, clickHandler}) {
  const { id, name, house } = personaje;
  return (
    <div style={{
      backgroundColor: "blue",
      borderRadius: "10px"
    }} >
      <h3>Nombre: {name}</h3>
      <h3>Casa: {house}</h3>
      <button onClick={() => clickHandler(id)}>Ver Detalle</button>
    </div>
  )
}

//* Montaje   useEffect(() => {}, []);
//* Actual    useEffect(() => {}, [estado]);
//* Desmonta  useEffect(() => () => {}, []);