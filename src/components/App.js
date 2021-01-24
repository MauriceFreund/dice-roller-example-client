import "../style/App.css";
import "../style/General.css";

// import DiceRoller from "./DiceRoller.js";
import DiceBoard from "./DiceBoard.js";

function App() {
    return (
        <div className="App">
            <h1 className="PageTitle">Dice Roll Client</h1>
            <DiceBoard></DiceBoard>
        </div>
    );
}

export default App;
