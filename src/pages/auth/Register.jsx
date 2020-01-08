import React from "react";
import { Form, Icon, Input, Button, Checkbox, Layout } from "antd";
import "./login.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
          margin: "0px 10px"
        }}
      >
        <div
          style={{
            maxWidth: "300px",
            position: "absolute",
            top: "30%",
            left: " 50%",
            margin: " -160px 0 0 -160px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "30px"
            }}
          >
            <img
              src={require("../../assets/logo.png")}
              alt="logo imagen"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
          <Text
            className="authForm"
            style={{ fontSize: "16px" }}
            type="secondary"
          >
            Regístrate
          </Text>
          <Form
            style={{ marginTop: "10px" }}
            onSubmit={this.handleSubmit}
            className="authForm login-form "
          >
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Ingresa tu email" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Ingresa tu contraseña" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                style={{ width: "300px" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Guardar
              </Button>
              <Link to="/login">Volver</Link>
            </Form.Item>
          </Form>
        </div>
      </Layout>
    );
  }
}
const WrappedNormalRegisterForm = Form.create({ name: "normal_login" })(
  RegisterForm
);

export default WrappedNormalRegisterForm;
