import React, { useState } from "react";
import { Menu } from "antd";
import Logo from "../../../assets/images/newLogoChange.pi9f4___";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const MenuAPP = () => {
  const [current, setCurrent] = useState("inicio");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div style={{display:"flex"}}>
        <img className="logoContainer" src={Logo} alt="Logo" />
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="menuPrincipal"
        >
          <Menu.Item key="inicio" icon={<HomeOutlined />}>
            Inicio
          </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined />}
            title="Navigation Three - Submenu"
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
    </div>
  );
};
export default MenuAPP;
