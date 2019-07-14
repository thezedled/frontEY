import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { catalogs } from "../../utils/api";
import LastAppointment from "../lastAppointment";
import { Link } from "react-router-dom";
import isNil from "lodash/isNil";
import moment from "moment";

class Appointments extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      catalogs: [],
    };
  }

  componentDidMount() {
    catalogs()
      .then(res => {
        if (isNil(res) === false) {
          localStorage.setItem('idComponent', JSON.stringify(res.data.result._id));
          this.setState({
            catalogs: res.data.result,
            loading: false
          });
        }
      })
      .catch(err => console.log(err));
  }



  render() {
    const { appointments } = this.props;
    return (
      <div className="appointments__container">
        {this.state.catalogs.map((appointment, index) => {
          console.log('appointment', appointment._id);
          
       return (
          <Link to="/appointmentDetail">
            <LastAppointment
              date={appointment.Fecha}
              onClick={() => {}}
              drName={appointment.Doctor}
              medicine={appointment.Medicamento}
              idComponent={appointment._id}
            />
          </Link>
        )})}
      </div>
    );
  }
}

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired
};

export default Appointments;
