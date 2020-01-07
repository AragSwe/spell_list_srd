import React from "react";
import { TSpell } from "../stores/spell-store";

export const SpellListItem = (props: { spell: TSpell }) => {
    return <label>
        Level {props.spell.level} { props.spell.name } { props.spell.maxDuration && <span>{ props.spell.maxDuration } </span>}
    </label>
}