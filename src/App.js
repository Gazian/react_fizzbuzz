import {useState, useEffect} from "react";
import './App.css';

function App() {

  let[number, setNumber] = useState(1);
  let[answer, setAnswer] = useState("");

  useEffect(() =>{
    gameLogic(number);
  }, [number])


  const handleInc = () => {
    setNumber(number +1);
  }

  const gameLogic = (inputNumber) => {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }
  }


  return (
    <>
    <button value={number} onClick={handleInc}>+</button>
    <h2>Number is: {number}</h2>
    <h2>Answer: {answer}</h2>

  </>
  );
}

export default App;
