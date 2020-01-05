import React from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"


export const UnusedSpellList = observer(() => {
    const { spellStore } = useStores();

    return (
        <>
            <h2>Unused spells</h2>
            <ul>
                { spellStore.getUnusedSpells.map(s => 
                    <li>
                        <label>
                            <span>Level {s.level}</span>
                            { s.name }
                            { s.duration && <span>{ s.duration } </span>}
                        </label>
                        <button onClick={() => spellStore.castKnownSpell(s.name)}>Cast</button>
                    </li>)
                }
            </ul>
        </>
      )
})

export default UnusedSpellList;