import { useState } from "react";

const MortgageCalculator = ()=>{
const [loanAmount, setLoanAmount]= useState(()=>{
    let default_amount = 0;
    return default_amount
});
const [downPayment, setDownPayment]= useState(0)
const [interest, setinterest]= useState(0)
const [loanTerm, setLoanTerm]= useState(null)
    return (
        <>
        <h1>Mortgage Calculator</h1>

        <span>Loan Amount(Rs):</span> <input type="number"></input><br/>
        <span>Down Payment(Rs)(Rs):</span> <input type="number"></input><br/>
        <span>Rate of Interest(%):</span> <input type="number"></input><br/>
        <span>Loan Term (years):</span> <input type="number"></input>
        </>
    )
}

export default MortgageCalculator;