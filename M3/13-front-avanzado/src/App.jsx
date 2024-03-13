import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
// import Characters from "./components/Characters";
const Characters = React.lazy(() => import("./components/Characters"));

function App() {

  return (
    <div>
      <h1>Fontend Avanzado</h1>
      <Navbar />
      <Suspense fallback={<p>Cargando...</p>}>
        <Characters />
      </Suspense>
    </div>
  )
}

export default App
