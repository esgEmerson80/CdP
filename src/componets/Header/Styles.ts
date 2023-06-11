
import styled from "styled-components";

export const Container1 = styled.div`
  width: 100%;
  height: 40px;
 
  position: fixed;
  background-color: #025197;
  margin: -10px -30px;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  font-family: verdana;
  font-size:13px;
  color: #f0f1f3;
  text-decoration: none;
  list-style: none;
  p {
    width: 20%;
    color: #fff;
    display: flex;
    font-weight: bold;
    margin: 20px 10px;
    align-items: center;
    justify-content: center;  
  }
  .botao {
    padding: 10px 20px;
    margin: 0px 3px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    &: hover {
      opacity: 0.5;
      background-color: #fff
    }
`;      
export const ContainerAux = styled.div`
  width: 40%;
  background-color: #025197;
  margin: 20px 10px;
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: right;
  font-family: verdana;
  color:#f0f1f3;
  
  li {
      margin: 0px 1px;
      background-color: #b1b2b5;
      border-radius: 4px;
      justify-content: space-between;
      align-items: center;
         
      .continuar {
        padding:6px 20px;
        margin: 4px 3px;
        font-weight: bold;
        border-radius: 4px;
        display: inline-block;
        cursor: pointer;
        font-family: verdana;
        text-decoration: none;
        list-style: none;
        font-size: 14px;
        transition: 0.2s;
      }
        &: hover {
        opacity: 0.5;
        background-color: #f0f1f3;
        
      }
`;   


export const LayoutHeader = styled.div`
  width: 25%;
  left: 0;
  height: 27px;
  margin: 0px 20px;
  background-color: #025197;
  display: flex;
  flex-direction: column;
  
`;
