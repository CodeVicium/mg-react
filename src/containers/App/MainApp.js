import React from "react";
import {Layout} from "antd";
import {footerText} from "util/config";
import App from "routes/index";
import {useSelector} from "react-redux";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
} from "../../constants/ThemeSetting";

const {Footer} = Layout;

const MainApp = (props) => {

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default :
        return ""
    }
  };

  const {match} = props;

  return (
    <Layout className="gx-app-layout">
      
      <Layout>
          <App match={match}/>
          <Footer>
            <div className="gx-layout-footer-content">
              {footerText}
            </div>
          </Footer>
      </Layout>
    </Layout>
  )
};


export default MainApp;

