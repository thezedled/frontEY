import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Calendar, Badge  } from 'antd';
import '../../App.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class CustomCalendar extends Component {
  state = {
    collapsed: false,
  };
  
getListData =  (value) => {
    let listData;




    
    switch (value.date()) {
      case 11:
        listData = [
          { type: 'warning',},
        ];
        break;
        case 13:
        listData = [
          { type: 'warning',},
        ];
        break;
        case 20:
        listData = [
          { type: 'warning',},
        ];
        break;
      case 10:
        listData = [
          { type: 'warning',},
        ];
        break;
      case 15:
        listData = [
          { type: 'warning',},
        ];
        break;
      default:
    }

    return listData || [];
  }
  
 dateCellRender = (value) => {
    const listData = this.getListData(value);
    return (
      <div className="events">
        {listData.map(item => (
          <div key={item.content}>
            <Badge dot status={item.type} text={item.content} />
          </div>
        ))}
      </div>
    );
  }
  

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

render(){
    return(


        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar dateCellRender={this.dateCellRender}  fullscreen={false} onPanelChange={this.onPanelChange} />
      </div>

       
    )
}
}

export default CustomCalendar;



