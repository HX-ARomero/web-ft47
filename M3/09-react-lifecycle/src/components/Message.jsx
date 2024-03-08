import { useEffect } from "react";

export default function Message() {

  useEffect(() => {
    console.log("Message se montó al DOM");
  }, []);

  useEffect(() => () => {
    console.log("Message se desmontó al DOM");
  }, []);

  return (
    <div style={{backgroundColor: "darkslateblue"}}>
      <h2>Mensaje</h2>
    </div>
  )
}