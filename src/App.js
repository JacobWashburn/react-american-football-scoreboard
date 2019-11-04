
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import AddButtons from "./AddButtons"
import Scoreboard from "./ScoreBoard"

function App() {
    let [lionsPoints, addLionPoints] = useState(0);
    let [tigersPoints, addTigerPoints] = useState(0);
    let touchdown = 7;
    let fieldGoal = 3;

    function addPoints(teamPoints, addTeamPoints, type) {
        return addTeamPoints(teamPoints + type)
    }


    return (
        <div className="container">
            <Scoreboard home={lionsPoints} away={tigersPoints}/>
            <AddButtons tch={touchdown} fg={fieldGoal} add={addPoints} home={lionsPoints} away={tigersPoints}
                        addHome={addLionPoints} addAway={addTigerPoints}/>
        </div>
    );
}

export default App;
