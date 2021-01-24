import React from 'react';

import DiceUserInterface from "./DiceUserInterface";
import AddDiceInput from "./AddDiceInput";
import RollStringDisplay from "./RollStringDisplay";

import "../style/DiceBoard.css";


class DiceBoard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            nextDiceId: 0,
            activeDice: []
        };
        this.addDice = this.addDice.bind(this);
        this.setDiceAmount = this.setDiceAmount.bind(this);
        this.removeDice = this.removeDice.bind(this);
    }

    addDice(diceValue, isConstant) {
        var activeDice = this.state.activeDice;
        activeDice.push({
            id: this.state.nextDiceId,
            value: diceValue,
            amount: 1,
            isConstant: isConstant
        })
        this.setState({
            nextDiceId: this.state.nextDiceId + 1,
            activeDice: activeDice
        });
    }

    removeDice(diceId) {
        var activeDice = this.state.activeDice.filter((dice) => dice.id !== diceId);
        this.setState({
            activeDice: activeDice
        });
    }

    setDiceAmount(diceId, newAmount) {
        var activeDice = this.state.activeDice;
        var diceIndex = activeDice.findIndex(dice => dice.id === diceId);
        activeDice[diceIndex].amount = newAmount;
        this.setState({
            activeDice: activeDice
        });
    }

    generateDiceElements() {
        return this.state.activeDice.map(
            dice => <li key={dice.id}>
                <DiceUserInterface
                    dice={dice}
                    setDiceAmountCallback={this.setDiceAmount}
                    deleteDiceCallback={this.removeDice}>
                </DiceUserInterface>
            </li>
        );
    }

    render() {
        return (
            <div className="DiceBoard">
                <AddDiceInput diceAddedCallback={this.addDice}></AddDiceInput>
                <ul className="DiceList">{this.generateDiceElements()}</ul>
                <RollStringDisplay activeDice={this.state.activeDice}></RollStringDisplay>
            </div>
        )
    }

}

export default DiceBoard;