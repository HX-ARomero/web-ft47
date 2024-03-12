import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const isRegistered = true;

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      borderRadius: '20px'
    }}>
      <h1 style={ isRegistered ? { color: 'green'} : { color: 'red'} } >Nuestra primera aplicación en REACT</h1>
      <hr />
      { isRegistered && <Login /> }
      { !isRegistered && <Register /> }
      <hr />
      { isRegistered ? <Login /> : <Register /> }
    </div>
  )
}

export default App

//* JSX => JavaScript Extended