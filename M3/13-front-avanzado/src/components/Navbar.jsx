import React from 'react'
import useToggle from '../hooks/useToggle';

export default function Navbar() {

  const [isLogged, toggleIsLogged] = useToggle(false);
  //*     false,   () => setValue(!value)

  return (
    <div>
      <h2>Navbar</h2>
      <button onClick={toggleIsLogged}>{isLogged ? "Logout" : "Login"}</button>
    </div>
  )
}
