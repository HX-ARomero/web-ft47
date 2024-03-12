import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AgregarInvitado from './components/AgregarInvitado';
import { quitarInvitado } from './redux/invitadosSlice';

function App() {
  //* Traemos "invitados" desde el estado global
  const todosLosInvitados = useSelector(state => state.invitados);
  console.log(todosLosInvitados);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(quitarInvitado(id));
  }

  return (
    <>
      <h1>React-Redux</h1>
      <h2>Agregar invitado</h2>
      <AgregarInvitado />
      <hr />
      <h2>Lista de invitados</h2>
      <hr />
      {
        !todosLosInvitados.length
        ? <h3>No hay invitados</h3>
        : todosLosInvitados.map(invitado => (
          <h3 key={invitado.id}>{invitado.nombre} {invitado.apellido}
            <button onClick={() => handleClick(invitado.id)}>X</button>
          </h3>
        ))
      }
    </>
  )
}

export default App
