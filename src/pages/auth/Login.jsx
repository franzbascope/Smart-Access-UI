import React from "react";
import { Form, Icon, Input, Button, Checkbox, Layout } from "antd";
import "./login.css";
import { login } from "../../store/actions/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { mainAction } from "../../store/actions/main_action";
import { Alert } from "antd";
import { Spin } from "antd";

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { email, password } = values;
        let user = { email, password };
        this.props.mainAction(login(user));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
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
          <Form onSubmit={this.handleSubmit} className="authForm login-form">
            {this.props.error ? (
              <Alert
                message="Email o contraseña incorrectos"
                style={{ marginBottom: "15px" }}
                type="error"
              />
            ) : (
              ""
            )}
            <Form.Item>
              {getFieldDecorator("email", {
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
              {this.props.loading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "200px"
                  }}
                >
                  <Spin style={{ marginTop: "40px" }} size="large" />
                </div>
              ) : (
                <div>
                  {<Checkbox>Recuerdame</Checkbox>}
                  <Link
                    style={{ float: "right" }}
                    className="login-form-forgot"
                    to="/forgot_password"
                  >
                    Olvidé mi contraseña
                  </Link>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Iniciar sesión
                  </Button>
                  o <Link to="/register">Regístrate</Link>
                </div>
              )}
            </Form.Item>
          </Form>
        </div>
      </Layout>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginForm);

const mapStateToProps = state => ({
  loading: state.UserReducer.loading,
  error: state.UserReducer.error
});

const mapDispatchToProps = dispatch => ({
  mainAction: bindActionCreators(mainAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
