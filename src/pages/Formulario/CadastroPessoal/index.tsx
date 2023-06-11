import React, { useState } from "react";
import { Form, Button, Divider} from "antd";


import { ContainerCadastro } from "./Styles";
import { ContainerForm} from "./Styles";
import { ContainerAux } from "./Styles";



const Pessoal: React.FC = () => {
  
   const [form] = Form.useForm();
  
   
  return (
    <ContainerCadastro>
      <ul>
        <Divider orientation="left">
          <p>CADASTRO PESSOA</p>
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
              <li>Data Nascimento:</li>
              <input
                className="inputData"
                type="Date"
                placeholder="D. Nascime..."
                id="nascimento"
              />
              <li>E-mail:</li>
              <input
                className="inputEmail"
                type="String"
                placeholder="E-mail"
                id="email"
              />
              <li>RG:</li>
              <input
                className="inputRegistro"
                type="registro"
                placeholder="RG"
                id="registro"
              />
              <li>CPF:</li>
              <input
                className="inputCpf"
                type="cpf"
                placeholder="CPF"
                id="cpf"
              />

              <li>Titulo de Eleitor:</li>
              <input
                className="inputEleitor"
                type="tituloEleitor"
                placeholder="Titulo Eleitor"
                id="tituloEleitor"
              />
              <li>Registro Militar:</li>
              <input
                className="inputMilitar"
                type="serviçoMilitar"
                placeholder="Serviço Militar"
                id="serviçoMilitar"
              />
              <li>Estado Civil:</li>
              <input
                className="inputCivil"
                type="estadoCivil"
                placeholder="Estado Civil"
                id="estadoCivil"
              />
            </div>
            <div className="conteudo-center">
              <li>Filiação:</li>
              <input
                className="inputMae"
                type="mae"
                placeholder="Mãe"
                id="mae"
              /><li></li>
              <input
                className="inputPai"
                type="pai"
                placeholder="Pai"
                id="pai"
              />
              <li>Endereço:</li>
              <input
                className="inputLogradouro"
                type="logradouro"
                placeholder="Endereço"
                id="logradouro"
              />
              <li>Nº:</li>
              <input
                className="inputN"
                type="numero"
                placeholder="Nº"
                id="numero"
              />
              <li>Bairro:</li>
              <input
                className="inputBairro"
                type="bairro"
                placeholder="Bairro"
                id="bairro"
              />
              <li>Cep:</li>
              <input
                className="inputCep"
                type="cep"
                placeholder="Cep"
                id="cep"
              />
              <li>Cidade:</li>
              <input
                className="inputCidade"
                type="cidade"
                placeholder="Cidade"
                id="cidade"
              />
              <li>UF:</li>
              <input
                className="inputEstado"
                type="estado"
                placeholder="Estado"
                id="estado"
              />
            </div>
            <div className="conteudo-right">
              <li>Função:</li>
              <input
                className="inputCargo"
                type="cargo"
                placeholder="Função"
                id="cargo"
              />
              <li>Entrada:</li>
              <input
                className="inputEntrada"
                type="Time"
                placeholder="Entrada"
                id="entrada"
              />
              <li>Saída do Almoço:</li>
              <input
                className="inputSaidaAlmoço"
                type="Time"
                placeholder="Almoço"
                id="sAlmoço"
              />
              <li>Entrada do Almoço:</li>
              <input
                className="inputEntradaAlmoço"
                type="Time"
                placeholder="Almoço"
                id="sAlmoço"
              />
              <li>Fim Expediente:</li>
              <input
                className="inputFim"
                type="Time"
                placeholder="Fim Exped..."
                id="expediente"
              />
              <li>Matrícula:</li>
              <input
                className="inputMatricula"
                type="matricula"
                placeholder="Matrícula"
                id="matricula"
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
      </ContainerForm>
      <ContainerAux>
        <Button type="link" href="/formulario/horaExtra">
          HORA EXTRA
        </Button>
        <Button type="link" href="/formulario/CadastroUnidManutencao">
          CONTRATO
        </Button>
      </ContainerAux>
    </ContainerCadastro>
  );
};

export default Pessoal;