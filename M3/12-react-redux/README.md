# HOMEWORK REACT-REDUX

## EJEMPLO

### LISTA de Invitados (STATE)
- 1 Homero Simpson
- 2 Marge Bubbie

### ORGANIZADOR => 1 sola persona => Necesita LISTA y EMAIL
1. Generar nueva lista en base a los cambios
2. Enviar la nueva lista a todos los AYUDANTES
3. Enviar la nueva lista a todos los INVITADOS

### AYUDANTES (COMPONENTES)
1. Enviar un email al ORGANIZADOR
   - ¿Qué hacer? Agregar ó Quitar
   - Nombre y apellido

### EMAIL (ACTION)
   - ¿Qué hacer? Agregar ó Quitar
   - Nombre y apellido
  
```js
ACTION = {
  type: agregarInvitado,
  payload: Nombre y Apellido
}
ACTION = {
  type: eliminarInvitado,
  payload: id
}
```

### INVITADOS (COMPONENTES SUSCRIPTOS)
- Recibir la lista actualizada