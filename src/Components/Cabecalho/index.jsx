import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

import { CabecalhoStyle, Logo } from "./style";

const Cabecalho = () => {
  return (
    <CabecalhoStyle>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </div>
    </CabecalhoStyle>
  );
};

export default Cabecalho;
