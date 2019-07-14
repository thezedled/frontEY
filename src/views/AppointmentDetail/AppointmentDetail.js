import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class AppointmentDetail extends PureComponent {
  render() {
    const {drName, date, medicines, description, symptons, imageAdded} = this.props
    return (
        <div className="appointment__detail">
          <div className="date">
            <p>{date}</p>
          </div>
          <h3>Diagnostic</h3>
          <p>{description}</p>
          <h3>Sintomas</h3>
          <p>{symptons}</p>
          <h3>Medicinas</h3>
          <p>{medicines}</p>
          {imageAdded && (
              <div>
                <h3>Imagen agregada</h3>
              <img src={imageAdded} />
              </div>
          )}
          <div className="date">
          <b><p>Dr. {drName}</p></b>
          </div>

        </div>
    )
  }
}


AppointmentDetail.propTypes = {
  drName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  medicines: PropTypes.array,
  description: PropTypes.string.isRequired,
  symptons: PropTypes.string.isRequired,
  imageAdded: PropTypes.string
};

AppointmentDetail.defaultProps = {
  medicines: [],
  imageAdded: ""
};

export default AppointmentDetail