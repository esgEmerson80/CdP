import styled from "styled-components";

export const Container = styled.body`
  flex-direction: column;
  display: flex;
  margin: -60px 10px;
  padding: 10px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f1f3;
    padding: 10px
  }
    li.cam {
      list-style: none;
      text-decoration: none;
      color: #025197;
      cursor: pointer;
      font-size: 30px;
      transition: 0.2s;  
      &: hover {
          opacity: 0.7;
          background-color: #f0f1f3;
          border-radius: 40px;
      }
    }
    li {
      list-style: none;
      text-decoration: none;
      color: #025197;
      font-family: Verdana;
      font-size: 13px;
  
    }

`;
export const ContainerCan = styled.body`
  display: flex;
  width: 300px;
  height: 180px;
  background-color: #f0f1f3;
  align-items: center;
  justify-content: center;
  padding: 80px 10px;
`;




