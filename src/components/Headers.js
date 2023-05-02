import {React,useState,useContext} from "react";
import { MainContext } from "../context/context";

const Headers = () => {
  const { name, surname, ab, setAb } = useContext(MainContext);
  const [bgcolor, setColor] = useState("red");

  const Change = () => {
    setAb(ab === "Tarlala" ? "Terlale" : "Tarlala"); // ternary operator
  };

  const SwitchBG = () => {
    setColor(bgcolor === "red" ? "blue" : "red");
  };
  return (
    <div style={{ height: 200, backgroundColor: bgcolor }}>
      <p>{name}</p>
      <p>{surname}</p>
      <hr />
      <h1>{ab}</h1>
      <button onClick={Change}>Change</button>
      <button onClick={SwitchBG}>Switch Background</button>
    </div>
  );
};

export default Headers;
