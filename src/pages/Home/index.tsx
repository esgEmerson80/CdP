import React from "react";

import { Container, ContainerBotao, ContainerAux  } from "./Styles";
import ctst from "../../assets/ctst.png";

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerBotao>
        <li>
            <a className="areaUsuario" href="/areaUsuario">
              ÁREA DO USUÁRIO
            </a>
        </li>
      </ContainerBotao>
      <ContainerAux>
          <img src={ctst} className="nomeHome" width="500" alt="cetest" />
      </ContainerAux> 
    </Container>
  );
};

export default Home;
