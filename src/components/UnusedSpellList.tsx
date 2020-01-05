import React from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"


export const UnusedSpellList = observer(() => {
    const { spellStore } = useStores();
    let spellName = "";
    return (
        <>
            <h2>Unused spells</h2>
            <input type="text" onKeyUp={(e) => spellName = (e.target as HTMLTextAreaElement).value}></input>
            <button onClick={() => spellName && spellStore.addKnownSpell(spellName)}>Add spell</button>
            <ul>
                { spellStore.getUnusedSpells.map(s => 
                    <li>
                        <label>{ s.name }</label>
                        <button onClick={() => spellStore.castKnownSpell(s.name)}>Cast</button>
                    </li>)
                }
            </ul>
            </>
      )
})

export default UnusedSpellList;