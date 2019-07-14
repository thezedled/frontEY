import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Input, Select } from "antd";
import NewAppointmentForm from "./NewAppointmentForm";
import WebcamCapture from "./webcam/CustomWebCam";

class NewAppointment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [1]
    };
  }

  addMedicine = () => {};

  render() {
    return (
      <div className="new__appointment--container">
        <h2>Agrega una nueva consulta médica</h2>
        <NewAppointmentForm
          addMedicine={this.addMedicine}
          medicines={this.state.medicines}
        />{" "}
       
      </div>
    );
  }
}

export default NewAppointment;
