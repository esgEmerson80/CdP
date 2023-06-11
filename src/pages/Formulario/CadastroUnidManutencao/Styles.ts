import styled from "styled-components";

export const Container2 = styled.div`
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
export const ContainerAux2 = styled.div`
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
export const ContainerForm2 = styled.div`
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
      flex-direction: column;
      padding: 0px 10px;
      margin: 20px 2px;
      width: 30%;
      flex-direction: column;
      list-style: none;
      .inputEmpresa {
          width: 400px;
        }
        .inputContrato {
          width: 100px;
        }
        .inputLogradouro {
          width: 400px;
        }
        .inputNumero {
          width: 120px;
        }
    }
    .conteudo-right {
        flex-direction: column;
        padding: 0px 10px;
        margin: 20px 2px;
        width: 70%;
        flex-direction: column;
        list-style: none;
          .inputBairro {
            width: 250px;
          }
          .inputCep {
            width: 120px;
          }
          .inputCidade {
            width: 200px;
          }
          .inputUf {
            width: 200px;
          }
          .alinhaBotao {
            width: 10%;
            display: flex;
            margin: 20px -1px;
            padding: 10px 0px;
          }
      }
    }
  }
`; 
