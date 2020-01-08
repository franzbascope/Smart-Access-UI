import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { menus } from "../configuration/menus";
import "./left_menu.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

class LeftMenuLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        breakpoint="md"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0px"
          }}
        >
          <img
            className="imgLogo"
            src={require("../assets/logo.png")}
            alt="logo imagen"
          />
        </div>

        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {menus.map((menu, index) => {
            if (menu.items.length == 0) {
              return (
                <Menu.Item key={index}>
                  <Link to={menu.url}>
                    {menu.icon ? <Icon type={menu.icon} /> : ""}
                    <span>{menu.title}</span>
                  </Link>
                </Menu.Item>
              );
            } else {
              return (
                <SubMenu
                  key={index}
                  title={
                    <span>
                      <Icon type={menu.icon} />
                      <span>{menu.title}</span>
                    </span>
                  }
                >
                  {menu.items.map((submenu, index) => {
                    return (
                      <Menu.Item key={index}>
                        <Link to={submenu.url} />
                        {submenu.title}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            }
          })}
        </Menu>
      </Sider>
    );
  }
}
export default LeftMenuLayout;
