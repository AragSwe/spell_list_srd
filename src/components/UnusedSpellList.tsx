import React from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"
import { SpellListItem } from "./SpellListItem";


export const UnusedSpellList = observer(() => {
    const { spellStore } = useStores();

    return (
        <>
            <h2>Unused spells</h2>
            <ul>
                {  spellStore.getUnusedSpells.length > 0 && spellStore.getUnusedSpells.map(s => 
                    <li>
                        <SpellListItem spell={s} />
                        <input type="button" className="button" onClick={() => spellStore.castKnownSpell(s.name)} value="Cast"></input>
                    </li>)
                    || 
                    <li>None!</li>
                }
            </ul>
        </>
      )
})

export default UnusedSpellList;