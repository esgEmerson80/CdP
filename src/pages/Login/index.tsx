import { Row, Form, Input, Button, message } from "antd";
import { Col } from "antd/es/grid";
import React from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvader/useAuth";

import { ContainerForm } from "./Styles";

export const Login: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
 
  async function onFinish (values: { email: string, password: string}): Promise<void> {
    try {
        await auth.authenticate(values.email, values.password);
        navigate('/formulario/cadastropessoal');
        
    } catch (error) {
          message.error('Acesso invalido...') 
      } 
    }
 
  return (
    <ContainerForm>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "140px",
        }}
      ></Row>
      <Col span={300}>
        <Form
          name="log"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          onFinish={onFinish}
        >
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              ENTRAR
            </Button>
            <Form.Item className="mb-3 form-check">
              <Row justify="center" align="middle">
                <input
                  type="checkbox"
                  className="form-check-label"
                  id="stayLoggedIn"
                />
                <label className="form-check-label" htmlFor="stayLoggedIn">
                  Mantenha-me conectado
                </label>
              </Row>
            </Form.Item>
          </Form.Item>
        </Form>
      </Col>
      <hr />
    </ContainerForm>
  );
};

export default Login;
