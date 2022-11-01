import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

import { BtnCabecalho, CabecalhoConteiner, Logo } from "./style";

const Cabecalho = () => {
  return (
    <CabecalhoConteiner> 
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </CabecalhoConteiner>
  );
};

export default Cabecalho;
