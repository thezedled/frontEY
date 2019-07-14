import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { detail } from "../../utils/api";
import isNil from "lodash/isNil";

class AppointmentDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      detail: []
    };
  }

  componentWillMount() {


    detail(localStorage.getItem("idComponent"))
      .then(res => {
        if (isNil(res) === false) {


          this.setState({
            detail: res.data.result,
            loading: false
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {

    const {
      drName,
      date,
      medicines,
      description,
      symptons,
      imageAdded
    } = this.props;
    return (
      <div className="appointment__detail">
        <div className="date">
          <p>{this.state.detail.Fecha}</p>
        </div>
        <h3>Diagnostic</h3>
        <p>{this.state.detail.Diagnostico}</p>
        <h3>Sintomas</h3>
        <p>{this.state.detail.Síntomas}</p>
        <h3>Medicinas</h3>
        <p>{this.state.detail.Medicinas}</p>
        {imageAdded && (
          <div>
            <h3>Imagen agregada</h3>
            <img src={this.state.detail.Imagen} />
          </div>
        )}
        <div className="date">
          <b>
            <p>Dr. {this.state.detail.Nombredeldoctor}</p>
          </b>
        </div>
      </div>
    );
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

export default AppointmentDetail;
