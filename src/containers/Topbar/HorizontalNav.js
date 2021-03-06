import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
} from "../../constants/ThemeSetting";

const SubMenu = Menu.SubMenu;

const HorizontalNav = () => {
  const navStyle = useSelector(({ settings }) => settings.navStyle);
  const pathname = useSelector(({ settings }) => settings.pathname);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
      className="menuPrincipal"
    >
      <Menu.Item className="LinkTo" key="main">
          <Link to="/inicio">
           Inicio
          </Link>
      </Menu.Item>

      <SubMenu
        className={getNavStyleSubMenuClass(navStyle)}
        key="in-built-apps"
        title="Servicios"
      >
        <Menu.Item key="in-built-apps/mail">
          <Link to="/PhotoCabina">
           Fotocabinas
          </Link>
        </Menu.Item>

        <Menu.Item key="in-built-apps/todo">
          <Link to="/Photo">
            Fotografia
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item className="LinkTo" key="contact">
          <Link to="/Contact">
           Contacto
          </Link>
      </Menu.Item>
    </Menu>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;
