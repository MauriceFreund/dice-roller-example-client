import React from "react";

import "../style/DiceUserInterface.css";

class DiceUserInterface extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.increaseAmount = this.increaseAmount.bind(this);
        this.decreaseAmount = this.decreaseAmount.bind(this);
    }

    increaseAmount() {
        this.props.setDiceAmountCallback(this.props.dice.id, this.props.dice.amount + 1);
    }

    decreaseAmount() {
        const newAmount = Math.max(this.props.dice.amount - 1, 0);
        this.props.setDiceAmountCallback(this.props.dice.id, newAmount);
    }

    getUpperButton() {
        return !this.props.dice.isConstant ? (
            <button className="UpperButton Button MainColorLight" onClick={this.increaseAmount}>
                Increase
            </button>
        ) : null;
    }

    getLowerButton() {
        return this.props.dice.amount > 1 && !this.props.dice.isConstant ? (
            <button className="LowerButton Button MainColorLight" onClick={this.decreaseAmount}>
                Decrease
            </button>
        ) : (
            <button className="LowerButton Button AccentColorLight" onClick={() => this.props.deleteDiceCallback(this.props.dice.id)}>
                Delete
            </button>
        );
    }

    render() {
        const dicePrefix = this.props.dice.isConstant ? "" : "d";
        return (
            <div className="DiceUserInterface">
                <div className="DiceValue">{dicePrefix + this.props.dice.value}</div>
                {this.getUpperButton()}
                {!this.props.dice.isConstant ? <div className="DiceAmount">{this.props.dice.amount}</div> : null}
                {this.getLowerButton()}
            </div>
        );
    }
}

export default DiceUserInterface;
