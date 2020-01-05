import React, { useState, ChangeEvent } from "react"
import { observer } from "mobx-react"

export const TurnCounter = observer(() => {
    const [turnCounter, setTurnCounter] = useState(1);

    const onAdvanceTurnCounter = (e: React.FormEvent) => { 
        e.preventDefault();
        setTurnCounter(turnCounter + 1);
    }

    const onResetTurnCounter = (e: React.FormEvent) => { 
        e.preventDefault();
        setTurnCounter(1);
    }

    return (
        <div>
            <h2>Turns</h2>
            <p>Current turn: {turnCounter}</p>
            <input type="button" value="Next turn" onClick={onAdvanceTurnCounter}></input>
            <input type="button" value="Reset turns" onClick={onResetTurnCounter}></input>
        </div>
      )
})

export default TurnCounter;