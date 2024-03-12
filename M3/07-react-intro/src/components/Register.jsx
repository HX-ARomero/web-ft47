import styled from "styled-components";

const CustomButton = styled.button`
  color: white;
  background-color: black;
  &:hover {
    color: black;
    background-color: white;
  }
`

const CustomH2 = styled.h2`
  color: red;
  font-size: 2em;
`

const Register = () => {
  return (
    <div>
      <CustomH2>Registro</CustomH2>
      <CustomButton>Ir al formulario de registro</CustomButton>
    </div>
  );
};

export default Register;

//* fragment => <> </>