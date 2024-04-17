import { useState } from "react";
const initialInvestment = {
  initialInvestment: 15000,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function UserInput() {
  const [dataInvestment, setDataInvestment] = useState(initialInvestment);
  console.log(dataInvestment);
  function handleChange(nameInput, valueInput) {
    // const newDataInvestment =
    setDataInvestment((prevState) => {
      return {
        ...prevState,
        [nameInput]: valueInput,
      };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            id="initialInvestment"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={dataInvestment.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            id="annualInvestment"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={dataInvestment.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            required
            id="expectedReturn"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={dataInvestment.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            id="duration"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={dataInvestment.duration}
          />
        </p>
      </div>
    </section>
  );
}
