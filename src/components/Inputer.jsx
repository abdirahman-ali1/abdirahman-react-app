import { useState } from "react";

function Inputer() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  }
  //function handleChange(event) {
   // setText(event.target.value); // update the state with the new value / reads user input
  //}

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </>
  );
}

export default Inputer;