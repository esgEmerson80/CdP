import styled from "styled-components";

export const ContainerCadastro = styled.div`
  height: 8vh;
  width: 210vh;
  background-color: #f0f1f3;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  margin: -45px -20px;
  padding: 2px 30px;
  
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
export const ContainerForm = styled.div`
  .conteudo {
    height: 67vh;
    width: 210vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: #f0f1f3;
    margin: -20px -20px;
    font-family: Verdana;
    padding: -10px 0px;

    input {
      border-radius: 8px;
      border: none;
      margin: 2px 0px;
      padding: 5px 5px;
      height: 20px;
    }
    .conteudo-left {
      width: 50%;
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
      .inputData {
        width: 100px;
      }
      .inputEmail {
        width: 300px;
      }
      .inputRegistro {
        width: 120px;
      }
      .inputCpf {
        width: 120px;
      }
      .inputEleitor {
        width: 200px;
      }
      .inputMilitar {
        width: 200px;
      }
      .inputCivil {
        width: 150px;
      }
    }

    .conteudo-center {
      width: 50%;
      height: 400px;
      padding: 0px 10px;
      margin: 20px 2px;
      font-size: 13px;
      .inputLogradouro {
        width: 400px;
      }
      .inputN {
        width: 110px;
      }
      .inputBairro {
        width: 200px;
      }
      .inputCep {
        width: 110px;
      }
      .inputCidade {
        width: 200px;
      }
      .inputEstado {
        width: 110px;
      }
      .inputMae {
        width: 400px;
      }
      .inputPai {
        width: 400px;
      }
    }
    .conteudo-right {
      width: 40%;
      height: 400px;
      padding: 0px 0px;
      margin: 20px 2px;
      font-size: 13px;
      .inputCargo {
        width: 250px;
      }
      .inputEntrada {
        width: 150px;
      }
      .inputSaidaAlmoço {
        width: 150px;
      }
      .inputEntradaAlmoço {
        width: 150px;
      }
      .inputFim {
        width: 150px;
      }
      .inputMatricula {
        width: 150px;
      }
      .alinhaBotao {
        width: 10%;
        display: flex;
        margin: 20px -1px;
        padding: 10px 0px;
      }
    }
  }
`; 
