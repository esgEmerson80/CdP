import React, { useState } from "react";
import { Form, Button, Divider} from "antd";

import { useAuth } from "../../../contexts/AuthProvader/useAuth";

import { ContainerForm } from "./Styles";
import { ContainerAux } from "./Styles";

export const cadastroUsuario: React.FC = () => {

  const [form] = Form.useForm();
  const auth = useAuth();
  
  const [input, setInput] = useState({auth});

  function cadasEmail(values: { email: string }) { 
    
    if (values.email) {
      
     } 
  }
  function cadasSenha(values: { password: string;
    passwordConfirm: string }) {
    
    if (values.password != values.passwordConfirm) {
      console.log
    } else
      
      return "As senhas não são iguais..."
  }


  return (
    <ContainerAux>
      <ContainerForm>
        
        <Form>
          <div className="conteudo.center">
            <li>Nome:</li>
            <input
              value={"nome"}
              className="inputNome"
              type="nome"
              placeholder="senha"
              autoFocus
              id="nome"
            />
            <li>Email:</li>
            <input
              value={"email"}
              className="inputEmail"
              type="String"
              placeholder="e-mail"
              id="emailId"
            />
            <li>Senha:</li>
            <input
              value={"Senha"}
              className="inputPassword"
              type="String"
              placeholder="Senha"
              id="emailSenha"
            />
            <li>Confirmar Senha:</li>
            <input
              value={"Confirmar Senha"}
              className="inputPassword"
              type="String"
              placeholder="Senha"
              id="emailConfSenha"
            />
            <hr />
              <Button type="primary" htmlType="submit">
                ENVIAR
              </Button>
              <Button>EXCLUIR</Button>
          </div>
        </Form>
      </ContainerForm>
    </ContainerAux>
  );
};

export default cadastroUsuario;
