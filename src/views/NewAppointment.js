import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Input,Select} from "antd";
import NewAppointmentForm from "./NewAppointmentForm";


class NewAppointment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [1]
    };
  }

  addPhoto = () =>{

  };

  addMedicine = () => {

  };

  render() {
    return (
        <div>
          <NewAppointmentForm addPhoto={this.addPhoto} addMedicine={this.addMedicine} medicines={this.state.medicines}/>
        </div>
    )
  }
}


export default NewAppointment