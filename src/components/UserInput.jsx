function UserInput({ userInput, onChangeData, onClick, isValid }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        required
                        onChange={(e) => onChangeData('initialInvestment', e.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        required
                        onChange={(e) => onChangeData('annualInvestment', e.target.value)}
                    ></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return (%)</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        required
                        onChange={(e) => onChangeData('expectedReturn', e.target.value)}
                    ></input>
                </p>
                <p>
                    <label >Duration (years)</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        required
                        onChange={(e) => onChangeData('duration', e.target.value)}
                    ></input>
                </p>
            </div>
            <div className="center">
                {!isValid && <p className="center">Please enter duration greater than 0 and less than 100.</p>}
                <button className="button" onClick={onClick} disabled={!isValid}>Calculate</button>
            </div>
        </section>
    );
}
export default UserInput;