import styled from "styled-components";


export const ContainerHe = styled.div`
  height: 8vh;
  width: 100%;
  background-color: #f0f1f3;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  margin: -45px -10px;
  padding: 2px 20px;
`;

export const ContainerForm = styled.div`
  .conteudo {
    height: 65vh;
    width: 210vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: #f0f1f3;
    margin: -20px -20px;
    font-family: Verdana;
    padding: 10px 5px;

    input {
      border-radius: 8px;
      border: none;
      margin: 2px 0px;
      padding: 5px 5px;
      height: 20px;
    }
    .conteudo-left {
      width: 40%px;
      height: 400px;
      padding: 4px 10px;
      margin: 20px 2px;
      font-size: 13px;
      border-radius: 5px;
      position: relative;
      .inputNome {
        width: 400px;
        height: 20px;
      }
    
    }
    .conteudo-right {
      width: 70%;
      height: 400px;
      padding: 0px 0px;
      margin: 20px 2px;
      font-size: 13px;

      .inputMatricula {
        width: 150px;
      }
      .inputCargo {
        width: 250px;
      }
      .inputData {
        width: 150px;
      }
      .inputEntradaExtra {
        width: 150px;
      }
      .inputSaidaExtra {
        width: 150px;
      }
      
    }
    .alinhaBotao {
      width: 10%;
      display: flex;
      margin: 20px -1px;
      padding: 10px 0px;
    }
  }
`; 
export const ContainerAux = styled.div`
  height: 4vh;
  width: 210vh;
  display: flex;
  background-color: #b1b2b5;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  font-family: Verdana;
  font-size: 13px;
  margin: -20px -20px;
  padding: px 11px;
`;