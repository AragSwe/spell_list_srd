import React from "react"

export const Button = (props: {caption:string, onClick:(e: React.FormEvent<Element>) => void}) => {
    return <input
        type="button"
        className="button"
        onClick= {props.onClick}
        value={props.caption} />
}