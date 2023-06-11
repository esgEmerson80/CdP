
import React from "react";
import { Container1, LayoutHeader, ContainerAux } from "./Styles";
import { ImHome3 } from "react-icons/im";

import logo from "../../assets/logo-cetest.png";
import { useAuth } from '../../contexts/AuthProvader/useAuth';


function Header() {

  const auth = useAuth();
    const handleLogout = async () => {
      await auth.logout();
      window.location.href = window.location.href;
    }
      
  return (
    <Container1>
      <LayoutHeader>
        <img src={logo} className="nomelogo" width="240" alt="logo-cetest" />
      </LayoutHeader>

      <ContainerAux>
        <p>Acesso do Administrador</p>

        <li>
          <a className="continuar" href="/login">
            ENTRAR
          </a>
        </li>
        <li className="botao">
          <a href="/">
            <ImHome3 />
          </a>
        </li>
      </ContainerAux>
    </Container1>
  );
};

export default Header;
