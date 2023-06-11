import React from "react";
import { Container, ContainerCan } from "./Styles";
import { HiCamera } from 'react-icons/hi'


const AreaUsuario: React.FC = () => {
     
  function ComponentCam() {
    
  }
  return (
    <Container>
      <ContainerCan>

      </ContainerCan>
      <ul>
        <li className="cam">
          <a href="/index.html">
            <HiCamera />
          </a>
        </li>
        <li className="tituloCam>">LIGAR CÂMERA</li>
      </ul>
    </Container>
  );
};

export default AreaUsuario;

