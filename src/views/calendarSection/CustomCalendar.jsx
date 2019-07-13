import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Calendar, Badge } from "antd";
import "../../App.css";

class CustomCalendar extends Component {
  state = {
    collapsed: false
  };

  getListData = value => {
    this.listData = [];

    this.props.data.map((item, index) => {
      switch (value.date()) {
        case item.dia:
          this.listData = [{ type: "warning" }];
          break;
        default:
      }
    });

    return this.listData;
  };

  dateCellRender = value => {
    const listData = this.getListData(value);
    return (
      <div className="events">
        {listData.map(item => (
          <div>
            <Badge dot status={item.type} />
          </div>
        ))}
      </div>
    );
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <div style={{ width: 333, border: "1px solid #d9d9d9", borderRadius: 4 }}>
        <Calendar
          dateCellRender={this.dateCellRender}
          fullscreen={false}
          onPanelChange={this.onPanelChange}
          defaultValue={this.props.defaultValue}
          onSelect={(e)=>{console.log(e)}}
        />
      </div>
    );
  }
}

export default CustomCalendar;
