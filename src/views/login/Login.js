import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { withRouter } from "react-router-dom";
import { login } from "../../utils/api";



class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      successed: false,
      inputCURP: "",
      inputLast: ""
    };
  }

  onChange = e => {
    this.setState({
      inputCURP: e.target.value
    });
  };

  login = () => {
    login({ curp: this.state.inputCURP })
      .then(res => {
        this.setState({
          successed: true
        });
      })
      .catch(err => {
        this.setState({
          successed: false
        });
        console.log(err);
      });
  };

  render() {



    const Button = withRouter(({ history }) => (
      <button
        type="button"
        onClick={() => {
          login({
            curp: this.state.inputCURP,
            code: `${this.state.firstInput}${this.state.secondInput}${
              this.state.thirdInput
            }${this.state.fourthInput}${this.state.inputLast}`
          })
            .then(res => {
              history.push("/");
              this.forceUpdate()
            })
          .catch(err => {
          console.log(err);
        });
        }}
      >
        Acceder
      </button>
    ));

    return (
      <div className="login__container">
        <div>
          {!this.state.successed && (
            <div className="login__buttons">
              <Input
                disabled={this.state.inputCURP.length < 19 ? false : true}
                placeholder="CURP"
                allowClear
                onChange={this.onChange}
              />
              <button onClick={this.login}>Log in</button>
            </div>
          )}
          {this.state.successed && (
            <div className="authentication__container">
              <p>Ingresa el código</p>
              <div>
                <input
                  type="number"
                  onChange={e => {
                    this.setState({
                      firstInput: e.target.value
                    });
                  }}
                  maxLength={1}
                />
                <input
                  type="number"
                  onChange={e => {
                    this.setState({
                      secondInput: e.target.value
                    });
                  }}
                  maxLength={1}
                />
                <input
                  onChange={e => {
                    this.setState({
                      thirdInput: e.target.value
                    });
                  }}
                  maxLength={1}
                />
                <input
                  type="number"
                  onChange={e => {
                    this.setState({
                      fourthInput: e.target.value
                    });
                  }}
                  min="0"
                  max="9 "
                  maxlength="1"
                />
                <input
                  block={this.state.inputLast.length < 1 ? false : true}
                  min="0"
                  max="9"
                  type="number"
                  onChange={e => {
                    this.setState({
                      inputLast: e.target.value
                    });
                  }}
                  maxlength="1"
                />
              </div>
              <Button />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
