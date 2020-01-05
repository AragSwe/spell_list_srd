import React from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"
import { SpellListItem } from "./SpellListItem";


export const UsedSpellList = observer(() => {
    const { spellStore } = useStores();
    return (
        <>
            <h2>Used spells</h2>
            {spellStore.getUsedSpells.length > 0 && 
            <> 
                <input type="button" className="button" value="Refresh spells" onClick={() => spellStore.refreshSpells()}></input>
                <ul>
                    { spellStore.getUsedSpells.map(s => 
                        <li><SpellListItem spell={s} /></li>
                        )
                    }
                </ul>
            </>
            }
        </>
      )
})

export default UsedSpellList;