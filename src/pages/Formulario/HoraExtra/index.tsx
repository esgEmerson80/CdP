import React from "react";

import { ContainerHe } from "./Styles";
import { ContainerForm} from "./Styles";
import { ContainerAux } from "./Styles";
import { useState } from 'react';
import {
  Form,
  Button,
  Divider,
  Space,
  
} from "antd";


const HoraExtra: React.FC = () => {
  
  return (
    <ContainerHe>
      <ul>
        <Divider orientation="left">
          <p>CADASTRO HORAS TRABALHADAS</p>
        </Divider>
      </ul>
      <ContainerForm>
        <Form>
          <div className="conteudo">
            <div className="conteudo-left">
              <li>Nome:</li>
              <input
                className="inputNome"
                type="nome"
                placeholder="Nome"
                autoFocus
                id="nome"
              />
            </div>
            <div className="conteudo-right">
              <li>Matrícula:</li>
              <input
                className="inputMatricula"
                type="matricula"
                placeholder="Matricula"
                id="codigo"
              />
              <li>Data:</li>
              <input
                className="inputData"
                type="Date"
                placeholder="Data"
                id="nascimento"
              />
              <li>Função:</li>
              <input
                className="inputCargo"
                type="cargo"
                placeholder="Função"
                id="cargo"
              />
              <li>Entrada:</li>
              <input
                className="inputEntradaExtra"
                type="Time"
                placeholder="Entrada"
                id="entradaExtra"
              />
              <li>Saída:</li>
              <input
                className="inputSaidaExtra"
                type="Time"
                placeholder="Saída"
                id="saidaExtra"
              />
              <li className="alinhaBotao">
                <Button type="primary" htmlType="submit">
                  ENVIAR
                </Button>
                <Button>EXCLUIR</Button>
              </li>
              
            </div>
          </div>
        </Form>
        <ContainerAux>
          <Space>
            <Button type="link" href="/formulario/CadastroPessoal">
              CADASTRO PESSOAL
            </Button>
          </Space>
        </ContainerAux>
      </ContainerForm>
    </ContainerHe>
  );
};

export default HoraExtra;