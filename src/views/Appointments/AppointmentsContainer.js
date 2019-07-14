import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Appointments from "./Appointments";
import LastAppointment from "../lastAppointment";


class AppointmentsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [
        {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },
        {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },{date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        },      {date: "11 de Febrero",
          drName: "Dr Poolllo 2",
          medicine: "Ibuprofeno"
        }
      ]
  }};
  render() {
    return (
        <div className="appointments__container">
          <Appointments appointments={this.state.appointments}/>
        </div>
    )
  }
}


export default AppointmentsContainer