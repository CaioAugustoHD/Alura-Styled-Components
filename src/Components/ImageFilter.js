import React from "react";

import { Icone } from "./UI/index";

import alimentacao from "../assets/images/alimentacao.svg" 
import outros from "../assets/images/outros.svg" 
import saude from "../assets/images/saude.svg" 
import transporte from "../assets/images/transporte.svg" 
import utilidades from "../assets/images/utilidades.svg" 


export const ImageFilter = (type) => {
    const imagem = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante"/>,
        Utilidades:<Icone src={utilidades} alt="Utilidades"/>,
        Saude: <Icone src={saude} alt="Saúde"/>,
        Transporte: <Icone src={transporte} alt="Transporte"/>,
        default: <Icone src={outros} alt="Outros"/>
    }
console.log(imagem[type]);
    return imagem[type] || imagem.default;
}