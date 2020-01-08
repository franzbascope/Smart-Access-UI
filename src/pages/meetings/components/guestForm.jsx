import React from "react";
import { Modal } from "antd";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import { validationMessage } from "../../../configuration/formMessages";

const GuestForm = props => {
  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };
  return (
    <Modal
      title="Nuevo invitado"
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <Form layout="vertical">
        <Form.Item label="Nombre">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: validationMessage("nombre")
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Apellido paterno">
          {getFieldDecorator("last_name", {
            rules: [
              {
                required: true,
                message: validationMessage("apellido paterno")
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Apellido materno">
          {getFieldDecorator("middle_name", {
            rules: [
              {
                required: true,
                message: validationMessage("apellido materno")
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: validationMessage("email")
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Número de celular">
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: validationMessage("número de celular")
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Agregue su dirección">
          {getFieldDecorator("address", {
            rules: [
              {
                required: true,
                message: validationMessage("dirección")
              }
            ]
          })(<Input.TextArea rows={3} placeholder="Calle libertdad Nro. 42" />)}
        </Form.Item>
        <Form.Item label="Número de documento">
          {getFieldDecorator("document", {
            rules: [
              {
                required: true,
                message: validationMessage("número de documento")
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};

const WrappedGuestForm = Form.create({ name: "guest_form" })(GuestForm);

export default WrappedGuestForm;
