import styled from "styled-components";

export const Container = styled.div`
  margin: -30px -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
 
`;
export const ContainerBotao = styled.div`
  
  display: flex;
  width: 100%;
  height 60px;
  padding: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  align-items: flex-end;
  list-style: none;

  li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 30px;
      color: #025197;
      font-weight: bold;
      background-color: #f0f1f3;
      border-radius: 5px;
      cursor: pointer;
      font-family: Verdana;
      font-size: 13px;
      transition: 0.2s;  
      &: hover {
        opacity: 0.6;
        background-color: #b1b2b5;
      }
    .areaUsuario {
      text-decoration: none;
      list-style: none;
    }
  }
`;

export const ContainerAux = styled.div`
  flex-direction: column;
  display: flex;
  height: 250px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
   
`;







