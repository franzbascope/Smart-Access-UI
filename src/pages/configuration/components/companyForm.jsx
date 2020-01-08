import React from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Icon,
  Select,
  Upload,
  Breadcrumb
} from "antd";
import { validationMessage } from "../../../configuration/formMessages";
import LocationMap from "../components/locationMap";
import { Link } from "react-router-dom";

const { Option } = Select;

const companyForm = props => {
  const uploadButton = (
    <div>
      <Icon type={props.imageloading ? "loading" : "plus"} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const prefixSelector = props.getFieldDecorator("prefix", {
    initialValue: "+591"
  })(
    <Select style={{ width: 70 }}>
      <Option value="+591">+591</Option>
    </Select>
  );
  const name = props.form ? props.form.name : "";
  const address = props.form ? props.form.address : "";
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Link to="/">
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
        </Link>
        <Link to="/configuration">
          <Breadcrumb.Item>
            <Icon type="setting" />
            <span>Configuración</span>
          </Breadcrumb.Item>
        </Link>
      </Breadcrumb>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <Form
          className="ant-advanced-search-form"
          onSubmit={props.handleSubmit}
        >
          <Row gutter={24}>
            <Col xs={24} sm={24}>
              {props.children}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Form.Item label="Nombre de la empresa">
                {props.getFieldDecorator("name", {
                  initialValue: name,
                  rules: [
                    {
                      required: true,
                      message: validationMessage("nombre de la empresa")
                    }
                  ]
                })(<Input placeholder="Apple Inc." />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Form.Item label="Número de contacto">
                {props.getFieldDecorator("contact_number", {
                  rules: [
                    {
                      required: true,
                      message: validationMessage("número de Contacto")
                    }
                  ]
                })(
                  <Input addonBefore={prefixSelector} placeholder="69193092" />
                )}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Form.Item label="Agregue su dirección">
                {props.getFieldDecorator("address", {
                  initialValue: address,
                  rules: [
                    {
                      required: true,
                      message: validationMessage("dirección")
                    }
                  ]
                })(
                  <Input.TextArea
                    rows={3}
                    placeholder="Calle libertdad Nro. 42"
                  />
                )}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Form.Item label="Agregue su logotipo">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={props.beforeUpload}
                  onChange={props.handleChange}
                >
                  {props.imageUrl ? (
                    <img
                      src={props.imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xxl={12}
              style={{ height: "400px", marginBottom: "0px !important" }}
            >
              <Form.Item
                label="Agregue su ubicación"
                style={{ marginBottom: "0px !important" }}
              />
              <LocationMap
                posx={props.posx}
                posy={props.posy}
                addMarker={props.addMarker}
              />
            </Col>
          </Row>
          <Col xs={24} sm={24}>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Col>
        </Form>
      </div>
    </div>
  );
};

export default companyForm;
