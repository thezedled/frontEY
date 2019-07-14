import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "../styles/dashboard.css"



class LastAppointment extends PureComponent {

  render() {
    const {date, drName, medicine, onClick} = this.props
    return (
        <div onClick={onClick} className="last__appointment--card">
          <i><p>{date}</p></i>
          <div>
            <p>{drName}</p>
            <p>{medicine}</p>
          </div>
        </div>
    )
  }
}


LastAppointment.propTypes = {
  date: PropTypes.string.isRequired,
  drName: PropTypes.string.isRequired,
  medicine: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

LastAppointment.defaultProps =
    {
      medicine: ""
    }

export default LastAppointment