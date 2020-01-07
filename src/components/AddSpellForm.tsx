import React, { useState, ChangeEvent } from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"
import { ToggleSection } from "./ToggleSection";
import { Button } from "./Button";

export const AddSpellForm = observer(() => {
    const { spellStore } = useStores();
    const [spellName, setSpellName] = useState("");
    const [spellLevel, setSpellLevel] = useState(1);

    const onSubmit = (e: React.FormEvent) => { 
        e.preventDefault();
        spellName && spellStore.addKnownSpell(spellName, spellLevel, null);
    }

    return (
        <>
            <ToggleSection header="Add spell" children={
                <div>
                    <input type="text" value={spellName} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpellName(e.target.value)} placeholder="Type spell name here"></input>
                    <input type="number" className="number" value={spellLevel} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpellLevel(e.target.valueAsNumber)}></input>
                    <Button caption="Add spell" onClick={onSubmit} />
                </div>
            } />
        </>
      )
})

export default AddSpellForm;