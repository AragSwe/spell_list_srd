import React, { useState } from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores";
import { Button } from "./Button";

export const TurnCounter = observer(() => {
    const { spellStore } = useStores();
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
            <Button caption="Next turn" onClick={onAdvanceTurnCounter} />
            <Button caption="Rest turns" onClick={onResetTurnCounter} />
        </div>
      )
})

export default TurnCounter;