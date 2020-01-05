import React, { useState, ChangeEvent } from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"

export const AddSpellForm = observer(() => {
    const { spellStore } = useStores();
    const [spellName, setSpellName] = useState("");
    const [spellLevel, setSpellLevel] = useState(1);

    const onSubmit = (e: React.FormEvent) => { 
        e.preventDefault();
        spellName && spellStore.addKnownSpell(spellName, spellLevel, null);
    }

    return (
        <div>
            <h2>Unused spells</h2>
            <input type="text" value={spellName} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpellName(e.target.value)} placeholder="Type spell name here"></input>
            <input type="number" value={spellLevel} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpellLevel(e.target.valueAsNumber)}></input>
            <input type="submit" value="Add spell" onClick={onSubmit}></input>
        </div>
      )
})

export default AddSpellForm;