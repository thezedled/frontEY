import React, { PureComponent, Fragment } from "react";
import Webcam from "react-webcam";
import { consulta } from "../../utils/api";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";
import { Input, Button } from "antd";

class WebcamCapture extends React.Component {
  state = {
    imagen: "",
    showImage: false
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();

    const imgB64 = `data:image/png;base64,${imageSrc}`;

    this.setState({
      showImage: true,
      imagen: imageSrc
    });
  };

  retry = () => {
    this.setState({
      showImage: false
    });
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        {this.state.showImage === false ? (
          <button onClick={this.capture}>Capture photo</button>
        ) : null}

        {this.state.showImage === true ? (
          <Fragment>
            <img src={this.state.imagen} alt="Logo" />
            <button onClick={this.retry}>Retry</button>
            <Button
              disabled={
                isEmpty(this.props.inputDrName) === false &&
                isEmpty(this.props.inputMedicine) === false &&
                isEmpty(this.props.inputSymptons) === false &&
                isEmpty(this.props.inputDescription) === false
                  ? false
                  : true
              }
              type="primary"
              loading={this.state.loading}
              onClick={async () => {
                this.setState({
                  loading: true
                });

                const data = {
                  curp: "gora921128hdfnmr08",
                  nombre: this.props.inputshowImageDrName,
                  fecha: "29/07/2019",
                  medicinas: this.props.inputMedicine,
                  sintomas: this.props.inputSymptons,
                  notas: this.props.inputDescription,
                  imagen: this.state.imagen
                };

                await consulta(data)
                  .then(res => {
                    if (isNil(res) === false) {
                      this.setState({
                        posts: res.data.result,
                        loading: false
                      });
                    }
                  })
                  .catch(err => console.log(err));
              }}
            >
              Guardar
            </Button>
          </Fragment>
        ) : null}
      </div>
    );
  }
}

export default WebcamCapture;
