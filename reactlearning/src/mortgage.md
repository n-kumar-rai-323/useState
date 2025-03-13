import { useState } from "react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interest, setInterest] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = loanAmount - downPayment;
    const monthlyInterest = interest / 100 / 12;
    const totalPayments = loanTerm * 12;

    if (monthlyInterest === 0) {
      setMonthlyPayment(principal / totalPayments);
      return;
    }

    const payment =
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -totalPayments));

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>

      <label>Loan Amount (Rs):</label>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))}
      />
      <br />

      <label>Down Payment (Rs):</label>
      <input
        type="number"
        value={downPayment}
        onChange={(e) => setDownPayment(Number(e.target.value))}
      />
      <br />

      <label>Rate of Interest (%):</label>
      <input
        type="number"
        value={interest}
        onChange={(e) => setInterest(Number(e.target.value))}
      />
      <br />

      <label>Loan Term (years):</label>
      <input
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(Number(e.target.value))}
      />
      <br />

      <button onClick={calculateMortgage}>Calculate</button>

      {monthlyPayment !== null && (
        <h2>Monthly Payment: Rs {monthlyPayment}</h2>
      )}
    </div>
  );
};

export default MortgageCalculator;
