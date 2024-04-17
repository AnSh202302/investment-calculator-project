export default function UserInput({ dataInvestment, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            id="initialInvestment"
            onChange={(e) => onChange(e.target.id, e.target.value)}
            value={dataInvestment.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            id="annualInvestment"
            onChange={(e) => onChange(e.target.id, e.target.value)}
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
            onChange={(e) => onChange(e.target.id, e.target.value)}
            value={dataInvestment.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            id="duration"
            onChange={(e) => onChange(e.target.id, e.target.value)}
            value={dataInvestment.duration}
          />
        </p>
      </div>
    </section>
  );
}
