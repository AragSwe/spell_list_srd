import React, { useState, ChangeEvent } from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"
import { ToggleSection } from "./ToggleSection";
import { Button } from "./Button";

export const AddSpellForm = observer(() => {
    const { spellStore } = useStores();
    const [spellName, setSpellName] = useState("");
    const [spellLevel, setSpellLevel] = useState(1);
    const [useDuration, setUseDuration] = useState(false);
    const [spellDuration, setSpellDuration] = useState(1);
    const [spellDescription, setSpellDescription] = useState("");

    const onSubmit = (e: React.FormEvent) => { 
        e.preventDefault();
        const duration = (useDuration && spellDuration) || null;
        spellName && spellStore.addKnownSpell(spellName, spellLevel, duration, spellDescription);
    }

    return (
        <>
            <ToggleSection header="Add spell" children={
                <div>
                    Name: <input type="text" value={spellName} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpellName(e.target.value)} placeholder="Type spell name here"></input>
                    Level: <input type="number" className="number" value={spellLevel} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpellLevel(e.target.valueAsNumber)}></input>
                    Use duration? <input type="checkbox" defaultChecked={useDuration} onChange={(e: ChangeEvent<HTMLInputElement>) => setUseDuration(e.target.checked)} />
                    { useDuration && 
                        <input type="number" className="number" value={spellDuration} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpellDuration(e.target.valueAsNumber)}></input>
                    }
                    <br />
                    Description: <textarea onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => setSpellDescription(e.target.value)} />
                    <Button caption="Add spell" onClick={onSubmit} />
                </div>
            } />
        </>
      )
})

export default AddSpellForm;