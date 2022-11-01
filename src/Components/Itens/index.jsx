import React from "react";
import { ItensConteiner } from "./style";

import { Item } from "../Item";

export const Itens = (props) => {
    return (
        <ItensConteiner>
            <Item {...props} />
            <span>{props.date}</span>
        </ItensConteiner>
    )
} 