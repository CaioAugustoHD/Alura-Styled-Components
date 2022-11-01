import React from "react";

import { Titulo } from "../Titulo";
import Conta from "../Conta";

import { DivConteiner, Conteudo } from "./style";

const Container = () => {
  return (
    <DivConteiner>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </DivConteiner>
  );
};

export default Container;
