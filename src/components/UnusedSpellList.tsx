import React from "react"
import { observer } from "mobx-react"
import { useStores } from "../hooks/use-stores"
import { SpellListItem } from "./SpellListItem";
import { Button } from "./Button";


export const UnusedSpellList = observer(() => {
    const { spellStore } = useStores();

    return (
        <>
            <h2>Unused spells</h2>
            <ul>
                {  spellStore.getUnusedSpells.length > 0 && spellStore.getUnusedSpells.map(s => 
                    <li>
                        <SpellListItem spell={s} />
                        <Button caption="Cast" onClick={() => spellStore.castKnownSpell(s.name)} />
                    </li>)
                    || 
                    <li>None!</li>
                }
            </ul>
        </>
      )
})

export default UnusedSpellList;