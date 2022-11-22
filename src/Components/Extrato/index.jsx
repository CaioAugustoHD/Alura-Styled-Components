import React from "react";

import { Box, Botao } from "../UI/index";
import { extratoLista } from "../../info";
import { Itens } from "../Itens";


export const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map((update) => {
                return (
                    <Itens key={update.from} type={update.type} from={update.from} value={update.value} date={update.date}/>
            )})}
            <Botao>Ver Mais</Botao>
        </Box>
    )
}