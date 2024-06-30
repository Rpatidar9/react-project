import { useState } from "react";
import Chai from "./Chai.js";


function App() {
  let [counter, setCounter] = useState(15)
  let addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }
  let removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
      <Chai /></div>

  );
}

export default App;
