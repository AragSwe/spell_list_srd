import React from "react"

export const NumberSelector = (props: {value: any, onChange:(e: React.ChangeEvent<HTMLInputElement>) => void}) =>
{
    return <input
        type="number"
        className="number"
        value={props.value}
        onChange={props.onChange} />
}