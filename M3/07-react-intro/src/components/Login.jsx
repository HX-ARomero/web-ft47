import style from './Login.module.css'
//* style = { formulary, formText, formInput }

export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <form className={style.formulary} >
        <label className={style.formText}>Usuario: </label>
        <input className={style.formInput} type="text" />
        <br />
        <label>Contraseña: </label>
        <input type="text" />
      </form>
    </>
  )
}