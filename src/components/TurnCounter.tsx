import React, { useState } from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores";
import { Button } from "./Button";
import { SpellListItem } from "./SpellListItem";

export const TurnCounter = observer(() => {
    const { spellStore } = useStores();
    const [turnCounter, setTurnCounter] = useState(1);

    const onAdvanceTurnCounter = (e: React.FormEvent) => { 
        e.preventDefault();
        setTurnCounter(turnCounter + 1);
        spellStore.countDownSpellDuration();
    }

    const onResetTurnCounter = (e: React.FormEvent) => { 
        e.preventDefault();
        setTurnCounter(1);
    }

    return (
        <div>
            <h2>Turns</h2>
            <p>Current turn: {turnCounter}</p>
            <p>Active spells:</p>
            {   (spellStore.getActiveSpells.length > 0 &&
                <ul>
                    {spellStore.getActiveSpells.map(spell =>
                        <li><SpellListItem spell={spell}/></li>)}
                </ul>)
                || <p>None</p>
            }
            <Button caption="Next turn" onClick={onAdvanceTurnCounter} />
            <Button caption="Rest turns" onClick={onResetTurnCounter} />
        </div>
      )
})

export default TurnCounter;