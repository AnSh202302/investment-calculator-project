import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const initialInvestment = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 5,
};

function App() {
  const [dataInvestment, setDataInvestment] = useState(initialInvestment);
  const inputIsValid = dataInvestment.duration >= 1;
  function handleChange(nameInput, valueInput) {
    setDataInvestment((prevState) => {
      return {
        ...prevState,
        [nameInput]: Number(valueInput),
      };
    });
  }
  return (
    <>
      <UserInput dataInvestment={dataInvestment} onChange={handleChange} />
      {inputIsValid ? (
        <Results input={dataInvestment} />
      ) : (
        <p className="center">Please enter a value duration than zero</p>
      )}
    </>
  );
}

export default App;
