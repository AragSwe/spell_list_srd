import React from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"
import { SpellListItem } from "./SpellListItem";
import { Button } from "./Button";


export const UsedSpellList = observer(() => {
    const { spellStore } = useStores();
    return (
        <>
            <h2>Used spells</h2>
            {spellStore.getUsedSpells.length > 0 && 
            <>
                <Button caption="Refresh spells" onClick={() => spellStore.refreshSpells()} />
                <ul>
                    { spellStore.getUsedSpells.map(s => 
                        <li key={s.id}><SpellListItem spell={s} /></li>
                        )
                    }
                </ul>
            </>
            }
        </>
      )
})

export default UsedSpellList;