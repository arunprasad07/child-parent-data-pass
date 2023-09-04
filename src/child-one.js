import React, { useState } from "react";

function ChildOne(props) {
  const [inputVal, setInputVal] = useState("");

  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };

  const sendDataToParent = () => {
    props.sendDataToParent(inputVal);
  };

  return (
    <div>
      <h2>Child One</h2>
      <input type="text" value={inputVal} onChange={handleOnChange} />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default ChildOne;
