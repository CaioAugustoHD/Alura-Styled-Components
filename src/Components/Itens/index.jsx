import React from "react";
import { ItensConteiner } from "./style";

import { Item } from "../Item";
import { ImageFilter } from "../ImageFilter";

export const Itens = (props) => {
    return (
        <ItensConteiner>
            {ImageFilter(props.type)}
            <Item {...props} />
            <span>{props.date}</span>
        </ItensConteiner>
    )
} 