import React from "react";
import FooterLayout from "./footer";
import LeftMenuLayout from "./left_menu";
import TopMenu from "./top_menu";
import { Layout, Menu } from "antd";
import "./layout.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AppLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenuLayout />
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <TopMenu />
          </Header>
          <Content style={{ margin: "0 16px" }}>{this.props.children}</Content>
          <FooterLayout />
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
