import React from "react";

import { IconeTema } from "./UI/index";

import alimentacao from "../assets/images/alimentacao.svg" 
import outros from "../assets/images/outros.svg" 
import saude from "../assets/images/saude.svg" 
import transporte from "../assets/images/transporte.svg" 
import utilidades from "../assets/images/utilidades.svg" 


export const ImageFilter = (type) => {
    const imagem = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante"/>,
        Utilidades:<IconeTema src={utilidades} alt="Utilidades"/>,
        Saude: <IconeTema src={saude} alt="Saúde"/>,
        Transporte: <IconeTema src={transporte} alt="Transporte"/>,
        default: <IconeTema src={outros} alt="Outros"/>
    }

    return imagem[type] || imagem.default;
}