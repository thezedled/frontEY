import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./index.css"
import 'antd/dist/antd.css';
import Dashboard from "./views/Dashboard";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
        <Dashboard/>
    );
  }
}

export default App;



