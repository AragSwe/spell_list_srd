import React from "react";
import { TSpell } from "../stores/spell-store";
import { InfoButton } from "./InfoButton";

export const SpellListItem = (props: { spell: TSpell }) => {
    return <>
    <InfoButton infoText={props.spell.description} header={props.spell.name} />
    <label>
        Level {props.spell.level} { props.spell.name } { props.spell.maxDuration && <span>{ props.spell.maxDuration } </span>}
    </label>
    </>
}