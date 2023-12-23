import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from 'react';

function App() {
  const [isRefreshResult, setRefreshResult] = useState(false);
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 7,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    if (isRefreshResult) {
      setRefreshResult(false);
    }
    setUserInput(previousState => {
      return {
        ...previousState,
        [inputIdentifier]: +newValue
      };
    });
  };

  function handleClick() {
    setRefreshResult((prevResult) => !prevResult);
  }

  const isValid = userInput.duration > 0 & userInput.duration < 100;

  return (<>
    <Header id='header' />
    <UserInput userInput={userInput} onChangeData={handleChange} onClick={handleClick} isValid={isValid} />
    <Results input={userInput} isRefresh={isRefreshResult} />
  </>
  )
}
export default App
