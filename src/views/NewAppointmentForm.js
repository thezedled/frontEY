import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Input} from "antd";



class NewAppointmentForm extends PureComponent {
  onChange = e => {
    console.log(e);
  };
  render() {
    const { TextArea } = Input;
    const {addPhoto, addMedicine} = this.props;
    return (
        <div>
          <div className="new__appointment--form">
            <p>Dr Name</p>
            <Input placeholder="Doctor name" allowClear onChange={this.onChange} />
            <p>Symptons</p>
            <TextArea rows={4} />
            <p>Description</p>
            <TextArea rows={4} />
            <p>Medicines</p>
            {this.props.medicines.map((medicine, index) => {
              console.log(medicine)
              return(

                  <div className="medicine__container" key={index} id={medicine.medicine}>
                    <p>Name</p>
                    <Input placeholder="Doctor name" allowClear onChange={this.onChange} />
                    <div className="container__row space__between">
                      <div>
                        <p>Frecuencia</p>
                        <Input addonAfter="hrs" defaultValue="8" />
                      </div>
                      <div>
                        <p>Días de tratamiento</p>
                        <Input addonAfter="días" defaultValue="8" />
                      </div>
                    </div>

                  </div>
              )})}
            <button onClick={addMedicine}>Agregar medicina</button>
            <button onClick={addPhoto}>Agregar botón</button>


          </div>
        </div>
    )
  }
}


NewAppointmentForm.propTypes = {
  addPhoto: PropTypes.func.isRequired,
  addMedicine: PropTypes.func.isRequired
}


export default NewAppointmentForm