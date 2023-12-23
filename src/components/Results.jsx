import { calculateInvestmentResults, formatter } from '../util/investment.js';

let firstTime = true;
let resultsData = [{}];
let initialInvestment;

function Results({ input, isRefresh }) {
    console.log(isRefresh);
    if(isRefresh){
        firstTime=false;
        resultsData = calculateInvestmentResults(input);
        initialInvestment = input.initialInvestment;
    }
    return (
        <>
        {!firstTime && <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Capital</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Investement Value</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.annualInvestment * yearData.year + initialInvestment;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        </tr>)
                })}
            </tbody>
        </table>}
        </>
    );
}
export default Results;