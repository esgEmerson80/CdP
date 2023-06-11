import Logo from './assets/ctst.png'
import React, { useState } from 'react'
import { ImExit } from "react-icons/im";
import { AuthProvader } from './contexts/AuthProvader'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedLayout } from './componets/ProtectedLayout';
import { ContainerStyleForm } from "./Styles";
import { useAuth } from "../src/contexts/AuthProvader/useAuth";
import { Button, Space } from "antd";



import Home from "./pages/Home";
import Login from './pages/Login';
import Header from './componets/Header';
import Footer from './componets/Footer';
import CadastroPessoal from './pages/Formulario/CadastroPessoal';
import HoraExtra from './pages/Formulario/HoraExtra';
import CadastroUnidManutencao from "./pages/Formulario/CadastroUnidManutencao";
import AreaUsuario from './pages/AreaUsuario';
import CadastroUsuario from './pages/Formulario/cadastroUsuario';


function App() {

  const auth = useAuth();
  const handleLogout = async () => {
    await auth.logout();
    window.location.href = window.location.href;
  };

  return (
    <>
      <Header />
      <AuthProvader>
        <BrowserRouter>
          <ProtectedLayout>
            <ContainerStyleForm>
              <li>
                <Space>
                  <Button type="primary" href="/formulario/cadastropessoal">
                    Acesso do Administrador
                  </Button>
                </Space>
              </li>
              <li>
                <Space>
                  <Button type="primary" href="/formulario/cadastroUsuario">
                    Cadastro de Usuário
                  </Button>
                </Space>
              </li>

              <li className="botao">
                <a onClick={handleLogout} href="/Login">
                  <ImExit />
                </a>
              </li>
            </ContainerStyleForm>
          </ProtectedLayout>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/AreaUsuario" element={<AreaUsuario />} />
            <Route
              path="/formulario/cadastroPessoal"
              element={<CadastroPessoal />}
            />
            <Route path="/formulario/HoraExtra" element={<HoraExtra />} />
            <Route
              path="/formulario/cadastroUsuario"
              element={<CadastroUsuario />}
            />
            <Route
              path="/formulario/CadastroUnidManutencao"
              element={<CadastroUnidManutencao />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvader>

      <Footer />
    </>
  );
}
export default App
