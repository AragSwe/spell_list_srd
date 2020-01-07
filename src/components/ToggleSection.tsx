import React, { useState } from "react"

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
        <h2>{props.header} <input type="button" className="toggleButton" value="+" onClick={toggle}></input></h2>
        {visible && props.children}
    </>
}