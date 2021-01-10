import React, { useState } from "react"
import { Button } from "./Button";

export type TToggleSection = {
    header:string,
    children:any
}

export const ToggleSection = (props: TToggleSection) => {
    const [visible, setVisible] =  useState(false);

    const toggle = () => {
        setVisible(!visible);
    }

    return <>
        <h2>{props.header} <Button caption="+" onClick={toggle} /></h2>
        {visible && props.children}
    </>
}