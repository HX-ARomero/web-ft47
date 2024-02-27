# Proyecto Integrador - Módulo 3

## Aplicación de Gestión de Turnos

## User Stories

### Usuario Invitado Como usuario invitado quiero:

- Poder ingresar al Landing y Home (No podrá reservar un turno)
- Poder registrarme y crear una nueva cuenta

### Como Usuario Registrado quiero:

- Poder loguearme
  - **Extra**: Recibir email para validación en dos pasos
  - **Extra**: Poder recuperar contraseña
- Poder cerrar sesión
- **Extra**: Poder cambiar mis datos: Agregar mi foto de perfil
- Poder reservar un turno
  - Elegir fecha y horario (en fecha y hora accesibles)
  - **Extra**: Recibir confirmación por mail
- Poder ver mis turnos
- Poder cancelar turnos (hasta el día previo a la fecha del turno)
  - Recibir solicitud de confirmación antes de Cancelar
  - **Extra**: Recbir confirmación por mail

### **Extra**: Como Admin quiero:

- Administrar Días y Horarios disponibles
- Administrar Usuarios
- Poder ver turnos reservados
- Administrar Recursos (Banco, Médicos, Especialistas, Mesas, etc)

## UX/UI

- Landing Page: Información general de la empresa
- Formulario de registro de Usuario
- Navbar: intuitivo, siempre visible, con el logo de la empresa, e info del usuario activo
- Footer: Con información de contacto
- Home
  - Turnos: Días y horarios hábiles
  - Noticias e información pertinente
  - Acceso al formulario de creación de turnos
- Forumlario de registro de turnos
  - Detalle del turno, días, horario: Autocompletado y Variables Predefinidas
  - Que mantenga los datos, botones que desplieguen información, muestre calendario
  - Validación en tiempo real, y deshabilitar botón hasta completar todo

## Modelo Entidad/Relación

Turnos N:N Usuario 1:1 Credenciales
id (PK) id (PK) id (PK)
fecha nombre userId (FK)
horario email password
detalle imagen
teléfono
