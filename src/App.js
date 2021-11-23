import {useState, useEffect} from "react";
import './App.css';

function App() {

  let[number, setNumber] = useState(1);
  let[answer, setAnswer] = useState("");
  let[choice, setChoice] = useState("")

  useEffect(() =>{
    gameLogic(number);
  }, [number, choice])


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

  const handleUserChoice = () => {
    setChoice = 
  }




  return (
    <>
    <button value={number} onClick={handleInc}>+</button>
    <h2>Number is: {number}</h2>
    <h2>Answer: {answer}</h2>

    <label for="answers">Choose your answer:</label>

    <select name="answers" id="answers">
      <option value={number}>{number}</option>
      <option value="fizz">fizz</option>
      <option value="buzz">buzz</option>
      <option value="fizzbuzz">fizzbuzz</option>
    </select>

  </>
  );
}

export default App;
