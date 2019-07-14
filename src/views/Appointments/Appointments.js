import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import LastAppointment from "../lastAppointment";



class Appointments extends PureComponent {
  render() {
    const {appointments} = this.props
    return (
        <div className="appointments__container">
      {appointments.map((appointment, index)=> (

        <LastAppointment date={appointment.date} onClick={()=>{}} drName={appointment.drName}/>
      ))}
    </div>)
  }
}


Appointments.propTypes = {
  appointments: PropTypes.array.isRequired
};


export default Appointments