
import React from "react";

import { Container2 } from "./Styles";
import { ContainerForm2} from "./Styles";
import { ContainerAux2 } from "./Styles";
import { Form, Button, Divider, Space } from "antd";

const CadastroUnidManutencao: React.FC = () => {
  const botaoDeletar = () => {};
  const botaoEnviar = () => {};

  return (
    <Container2>
      <ul>
        <Divider orientation="left">
          <p>UNIDADES DE MANUTENÇÃO</p>
        </Divider>
      </ul>
      <ContainerForm2>
        <Form>
          <div className="conteudo">
            <div className="conteudo-left">
              <li>EMPRESA:</li>
              <input
                className="inputEmpresa"
                type="text"
                placeholder="Empresa"
                autoFocus
                id="empresa"
              />
              <li>CM:</li>
              <input
                className="inputContrato"
                type="text"
                placeholder="Registro"
                id="codigo"
              />
              <li>Endereço:</li>
              <input
                className="inputLogradouro"
                type="text"
                placeholder="Endereço"
                id="logradouro"
              />
              <li>Nº:</li>
              <input
                className="inputNumero"
                type="text"
                placeholder="Nº"
                id="numero"
              />
            </div>
            <div className="conteudo-right">
              <li>Bairro:</li>
              <input
                className="inputBairro"
                type="text"
                placeholder="Bairro"
                id="bairro"
              />
              <li>Cep:</li>
              <input
                className="inputCep"
                type="text"
                placeholder="Cep"
                id="cep"
              />
              <li>Cidade:</li>
              <input
                className="inputCidade"
                type="text"
                placeholder="Cidade"
                id="cidade"
              />
              <li>Estado:</li>
              <input
                className="inputUf"
                type="text"
                placeholder="Estado"
                id="estado"
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
      </ContainerForm2>
      <ContainerAux2>
        <Space>
          <Button type="link" href="/formulario/CadastroPessoal">
            CADASTRO PESSOAL
          </Button>
        </Space>
      </ContainerAux2>
    </Container2>
  );
};

export default CadastroUnidManutencao;