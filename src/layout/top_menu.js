import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu, Icon } from "antd";
import { logout } from "../store/actions/user";
import { mainAction } from "../store/actions/main_action";
const { SubMenu } = Menu;
class TopMenu extends Component {
  logout = () => {
    this.props.mainAction(logout());
  };

  render() {
    return (
      <Menu
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px",
          border: "0"
        }}
        selectable={false}
        onClick={this.handleClick}
        mode="horizontal"
      >
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon
                type="user"
                width="25em"
                height="25em"
                style={{ fontSize: 20 }}
              />
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">Mi cuenta</Menu.Item>
            <Menu.Item onClick={this.logout} key="setting:2">
              Cerrar esión
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  mainAction: bindActionCreators(mainAction, dispatch)
});

export default connect(null, mapDispatchToProps)(TopMenu);
