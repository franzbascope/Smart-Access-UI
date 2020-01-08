import React, { useState } from "react";
import { Form, Row, Col, Input, Button, DatePicker, TimePicker } from "antd";
import { validationMessage } from "../../../configuration/formMessages";
import GuestForm from "./guestForm";

const MeetingForm = props => {
  const [inputValues, setInputValues] = useState({
    guestModalVisible: false,
    text: "hola mundo"
  });
  const hideModal = () => {
    setInputValues({
      guestModalVisible: false
    });
  };
  const showModal = () => {
    setInputValues({
      guestModalVisible: true
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form className="ant-advanced-search-form" onSubmit={props.handleSubmit}>
      <Row gutter={24}>
        <Col xs={24} sm={24}>
          {props.children}
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xxl={6}>
          <Form.Item label="Fecha de la reunión">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: validationMessage("fecha")
                }
              ]
            })(<DatePicker placeholder="Fecha de la reunión" />)}
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xxl={6}>
          <Form.Item label="Hora inicio">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: validationMessage("hora de inicio")
                }
              ]
            })(<TimePicker placeholder="Inicio" />)}
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xxl={6}>
          <Form.Item label="Hora fin">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: validationMessage("hora fin")
                }
              ]
            })(<TimePicker placeholder="Fin" />)}
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
          <Form.Item label="Descripción">
            {getFieldDecorator("address", {
              rules: [
                {
                  required: true,
                  message: validationMessage("descripción")
                }
              ]
            })(<Input.TextArea rows={3} placeholder="Descripción" />)}
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
          <Form.Item label="Agregue su dirección">
            {getFieldDecorator("address", {
              rules: [
                {
                  required: true,
                  message: validationMessage("address")
                }
              ]
            })(<Input.TextArea rows={3} placeholder="placeholder" />)}
          </Form.Item>
        </Col>
        <Col xs={24} sm={24}>
          <Button
            onClick={showModal}
            type="primary"
            style={{ marginBottom: "20px" }}
            icon="plus"
          >
            Agregar invitado
          </Button>
        </Col>
        <GuestForm
          visible={inputValues.guestModalVisible}
          handleCancel={hideModal}
        />
        <Col xs={24} sm={24}>
          <Button type="primary" htmlType="submit">
            Guardar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const NewMeetingForm = Form.create({ name: "new_meetings_form" })(MeetingForm);

export default NewMeetingForm;
