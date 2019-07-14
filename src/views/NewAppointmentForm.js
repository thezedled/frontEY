import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";
import { consulta } from "../utils/api";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";
import { isEmptyStatement } from "@babel/types";
import WebcamCapture from "./webcam/CustomWebCam";

class NewAppointmentForm extends PureComponent {
  state = {
    inputDrName: "",
    inputDescription: "",
    inputSymptons: "",
    inputMedicine: "",
    openModal: false
  };

  onChange = (e, value) => {
    this.setState({
      inputDrName: e.target.value
    });
  };

  onChangeSymptons = (e, value) => {
    this.setState({
      inputSymptons: e.target.value
    });
  };

  onChangeDescription = (e, value) => {
    this.setState({
      inputDescription: e.target.value
    });
  };

  onChangeMedicina = (e, value) => {
    this.setState({
      inputMedicine: e.target.value
    });
  };

  render() {

    const { TextArea } = Input;
    const { addPhoto, addMedicine } = this.props;
    return (
      <div>
        <div className="new__appointment--form">
          <p>Dr Name</p>
          <Input
            placeholder="Doctor name"
            allowClear
            onChange={(e, value) => {
              this.onChange(e);
            }}
          />
          <p>Symptons</p>
          <TextArea
            onChange={(e, value) => {
              this.onChangeSymptons(e);
            }}
            rows={4}
          />
          <p>Description</p>
          <TextArea
            onChange={(e, value) => {
              this.onChangeDescription(e);
            }}
            rows={4}
          />
          <p>Medicines</p>
          {this.props.medicines.map((medicine, index) => {
            return (
              <div
                className="medicine__container"
                key={index}
                id={medicine.medicine}
              >
                <p>Name</p>
                <Input
                  placeholder="Doctor name"
                  allowCleinputSymptonsar
                  onChange={(e, value) => {
                    this.onChangeMedicina(e);
                  }}
                />
              </div>
            );
          })}
          <Button
          disabled={
            isEmpty(this.state.inputDrName) === false &&
            isEmpty(this.state.inputMedicine) === false &&
            isEmpty(this.state.inputSymptons) === false &&
            isEmpty(this.state.inputDescription) === false
              ? false
              : true
          }
            onClick={() => {
              this.setState({
                openModal: !this.state.openModal
              });
            }}
          >
            Agregar Foto
          </Button>

          {this.state.openModal === true ? (
            <WebcamCapture
              inputDrName={this.state.inputDrName}
              inputDescription={this.state.inputDescription}
              inputSymptons={this.state.inputSymptons}
              inputMedicine={this.state.inputMedicine}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

NewAppointmentForm.propTypes = {
  addPhoto: PropTypes.func.isRequired,
  addMedicine: PropTypes.func.isRequired
};

export default NewAppointmentForm;
