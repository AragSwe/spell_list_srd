import React, { useState, ChangeEvent } from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"
import { Button } from "./Button";
import { NumberSelector } from "./NumberSelector";

export const CharacterForm = observer(() => {
    const { characterStore } = useStores();
    const [name, setName] = useState(characterStore.characterInfo.name);
    const [level, setLevel] = useState(characterStore.characterInfo.level);
    const [wisdomModifier, setWisdomModifier] = useState(characterStore.characterInfo.wisdomModifier);

    const onSubmit = (e: React.FormEvent) => { 
        e.preventDefault();
        name && characterStore.setName(name);
        level && characterStore.setLevel(level);
        wisdomModifier && characterStore.setWisomModifier(wisdomModifier);
    }

    return (
        <div>
            <h2>My character</h2>
            Name: <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="Type character name here"></input>
            Level: <NumberSelector value={level} onChange={(e: ChangeEvent<HTMLInputElement>) => setLevel(e.target.valueAsNumber)} />
            Wis mod: <NumberSelector value={wisdomModifier} onChange={(e: ChangeEvent<HTMLInputElement>) => setWisdomModifier(e.target.valueAsNumber)} />
            <Button caption="Update character" onClick={onSubmit} />
        </div>
      )
})

export default CharacterForm;