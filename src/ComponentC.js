import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Component C</h1>
      <h2>{`Bye ${user} `}</h2>
    </div>
  );
}
export default ComponentC;
