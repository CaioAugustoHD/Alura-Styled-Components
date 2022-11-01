import React from "react";
import { ItemStyle } from "./style"

export const Item = ({type, from, value}) => {
    return (
        <ItemStyle>
            <span className="textBold">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </ItemStyle>
    )
}