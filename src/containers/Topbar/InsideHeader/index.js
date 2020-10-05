import React, {useState} from "react";
import { Layout, Menu, message } from 'antd';
import {connect, useDispatch, useSelector} from "react-redux";
import HorizontalNav from "../HorizontalNav";
import {Link} from "react-router-dom";
import {switchLanguage, toggleCollapsedSideNav} from "../../../appRedux/actions/Setting";
import Logo from "../../../assets/images/logo eventos.Vq8Po4"

const {Header} = Layout;

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Apps</Menu.Item>
    <Menu.Item key="3">Blogs</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  message.info('Click on menu item.');
}

const InsideHeader = () => {

  const dispatch = useDispatch();

  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);
  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Header
        className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e" style={{ color:"white",borderRadius:"50%"}}>
              <i className="gx-icon-btn icon icon-bars"
                 onClick={() => {
                   dispatch(toggleCollapsedSideNav(!navCollapsed));
                 }}
              />
            </div>
            <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo">
              <img className="logoContainer" alt="" src={Logo}/></Link>
            <Link to="/" className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo">
              <img className="logoContainer" alt="" src={Logo}/></Link>

            <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
              <HorizontalNav/>
            </div>
            <ul className="gx-header-notifications gx-ml-auto">
              <li onClick={()=>window.open("https://instagram.com/joseluismachado4?igshid=146k2nhozihwk")} className="gx-notify instagram">
              <i  className="icon icon-instagrem"></i>
              </li>

              <li onClick={()=>window.open("https://www.facebook.com/MGeventos-sonido-iluminaci%C3%B3n-cabina-foograficas-506903259649106/")} className="gx-notify facebook">
              <i  className="icon icon-facebook"></i>
              </li>

              <li onClick={()=>window.open("https://wa.link/sucbda")} className="gx-msg whatsapp">
                <i className="icon icon-whatsapp-1"></i>
              </li>
            </ul>
          </div>
        </div>
      </Header>
    </div>
  );
};

const mapStateToProps = ({settings}) => {
  const {locale, navCollapsed} = settings;
  return {locale, navCollapsed}
};
export default connect(mapStateToProps, {toggleCollapsedSideNav, switchLanguage})(InsideHeader);
