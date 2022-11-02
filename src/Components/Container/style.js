import styled from "styled-components";

export const DivConteiner = styled.div`
  background-color: ${ ({theme}) => theme.body };
  min-height: 90vh;
  padding: 0px 15vw;
`

export const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${ ({theme}) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`