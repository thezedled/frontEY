import React, { Component } from 'react';
import "../styles/dashboard.css"
//import './App.css';
import 'antd/dist/antd.css';
import PropTypes from "prop-types";

class PersonalInfo extends Component {
  render() {
    const {name, age, gender, weight, height, bloodType, allergies, chronicleDiseases, imageURL } = this.props
    return (
      <div className="personal__info--card">
        <img src={imageURL}/>
        <div>
          <div className="personal__info--data">
            <p>{name}</p>
            <p>Nombre</p>
          </div>
          <div className="personal__info--data">
            <p>{age}</p>
            <p>Edad</p>
          </div>
          <div className="personal__info--data">
            <p>{gender}</p>
            <p>Sexo</p>
          <div className="personal__info--data">
            <p>{weight}</p>
            <p>Peso</p>
          </div>
          <div className="personal__info--data">
            <p>{height}</p>
            <p>Estatura</p>
          </div>
          <div className="personal__info--data">
            <p>{bloodType}</p>
            <p>Grupo Sanguíneo</p>
          </div>
            {allergies  && (
                <div className="personal__info--data">
                  <p>{allergies}</p>
                  <p>Alergías</p>
                </div>
            )}
            {chronicleDiseases && (
                <div className="personal__info--data">
                  <p>{chronicleDiseases}</p>
                  <p>Enfermedades Crónicas</p>
                </div>
            )}
        </div>
        </div>
      </div>
  );
  }
}





PersonalInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  bloodType: PropTypes.string.isRequired,
  allergies: PropTypes.string,
  chroniclesDiseases: PropTypes.string,
  organDonor: PropTypes.bool.isRequired,
  imageURL: PropTypes.string
}

PersonalInfo.defaultProps = {
  allergies: "",
  chroniclesDiseases: "",
  imageURL: ""
}

export default PersonalInfo