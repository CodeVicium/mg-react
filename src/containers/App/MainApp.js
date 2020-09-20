import React from "react";
import {Layout} from "antd";
import {footerText} from "util/config";
import App from "routes/index";
import {useSelector} from "react-redux";

const {Footer} = Layout;

const MainApp = (props) => {
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

