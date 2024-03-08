import './App.css'
import Form from './components/Form'

function App() {
  const data = {
    name: "FT47",
    title: "Formulario Controlado en REACT"
  }

  return (
    <>
      <Form name={data.name} title={data.title} />
    </>
  )
}

export default App
