import './App.css'
import React, { useState } from "react";

export default function App() {
  const [roll, setRoll] = useState(0);
  // 3. In the instance of the Button component:
  //  - Use props to pass the function that generates a random number
  
  return (
    <div>
      <Dice roll={roll} />
      <Button />
    </div>
  );

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * 6 + 1); // this generates a random number between 1 and 6
    // 1. Write the code that would show an updated number when the user clicks.
    
  }
}

function Button(props) {
  // 2. Replace null inside the click handler with a prop. 
  //  - Make sure to name it!
  return <button className="button" onClick={null}>Roll away!</button>;
}

function Dice(props) {
  return <div className="dice">{props.roll}</div>;
}

export { App };

