import React, { useState } from "react";
import ChildOne from "./child-one";
import ChildTwo from "./child-two";
import "./styles.css";

export default function App() {
  const [childOneData, setChildOneData] = useState("");

  const childOneDataHandler = (data) => {
    setChildOneData(data);
  };

  return (
    <div className="App">
      <h2>Parent Component</h2>
      <p>Data from Child: {childOneData}</p>

      <ChildOne sendDataToParent={childOneDataHandler} />
      <ChildTwo dataFromParent={childOneData} />
    </div>
  );
}
