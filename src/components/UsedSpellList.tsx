import React from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"


export const UsedSpellList = observer(() => {
    const { spellStore } = useStores();
    return (
        <>
            <h2>Used spells</h2>
            <ul>
                { spellStore.getUsedSpells.map(s => 
                    <li>
                        <label>{ s.name }</label>
                    </li>)
                }
            </ul>
            </>
      )
})

export default UsedSpellList;