import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";

const SubMenu = Menu.SubMenu;

const SidebarContent = () => {
  let { navStyle, themeType, pathname } = useSelector(
    ({ settings }) => settings
  );

  const getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];

  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div
          className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}
        >
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <Menu.Item className="LinkTo" key="main">
              <Link to="/inicio">Inicio</Link>
            </Menu.Item>

            <SubMenu key="in-built-apps" title="Servicios">
              <Menu.Item key="in-built-apps/mail">
                <Link to="/PhotoCabina">Fotocabinas</Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/todo">
                <Link to="/Photo">Fotografia</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item className="LinkTo" key="contact">
              <Link to="/Contact">Contacto</Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;
