import React from "react";

import "../style/RollStringDisplay.css";

class RollStringDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            rollResult: null
        };
        this.fetchRollResult = this.fetchRollResult.bind(this);
    }

    onCom

    generateRollString() {
        var rollString = "";
        this.props.activeDice.forEach((dice) => {
            rollString += !dice.isConstant ? `${dice.amount}d${dice.value}+` : `${dice.value}+`;
        });
        const stringWithoutTrailingPlus = rollString.substring(0, rollString.length - 1);
        return stringWithoutTrailingPlus;
    }

    convertRollStringForUrl() {
        var rollString = this.generateRollString();
        return rollString.replaceAll('+', '%2B');
    }

    getRollResultElement() {
        return (
            <div className="RollResultElement">
                <p className="RollResult">{this.state.rollResult ? this.state.rollResult : 'Press "Roll" to get a result.'}</p>
                <p className="RollResultLabel">Result</p>
            </div>
        )
    }

    fetchRollResult() {
        fetch('http://diceapi.mauricefreund.com/rolldice?roll=' + this.convertRollStringForUrl())
            .then(response => response.text())
            .then(response => this.setState({rollResult: response}));
    }

    render() {
        return (
            <div className="RollStringDisplay">
                {this.generateRollString()}
                <button className="Button AcceptColor" onClick={this.fetchRollResult}>Roll</button>
                {this.getRollResultElement()}
            </div>
        );
    }
}

export default RollStringDisplay;
