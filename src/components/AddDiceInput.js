import React from "react";

import "../style/AddDiceInput.css";

class AddDiceInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextDiceValue: 6,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ nextDiceValue: event.target.value });
    }

    addDice(isConstant) {
        this.props.diceAddedCallback(this.state.nextDiceValue, isConstant);
    }

    render() {
        return (
            <div className="AddDiceInput">
                <input type="number" className="Input" value={this.state.nextDiceValue} onChange={this.handleInputChange} />
                <button className="AddDice Button MainColorLight" onClick={() => this.addDice(false)}>
                    Add Dice
                </button>
                <button className="AddConstant Button MainColorLight" onClick={() => this.addDice(true)}>
                    Add Constant
                </button>
            </div>
        );
    }
}

export default AddDiceInput;
