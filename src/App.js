import React, { Component,  } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import CustomCalendar from './views/calendarSection/CustomCalendar'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
     <CustomCalendar clasName="calendar"   />
    );
  }
}

export default App;



