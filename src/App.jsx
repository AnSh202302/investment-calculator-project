import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const initialInvestment = {
  initialInvestment: 15000,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [dataInvestment, setDataInvestment] = useState(initialInvestment);
  function handleChange(nameInput, valueInput) {
    setDataInvestment((prevState) => {
      return {
        ...prevState,
        [nameInput]: valueInput,
      };
    });
  }
  return (
    <>
      <UserInput dataInvestment={dataInvestment} onChange={handleChange} />
      <Results input={dataInvestment} />
    </>
  );
}

export default App;
