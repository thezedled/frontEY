import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Input} from "antd";
import { withRouter } from 'react-router-dom'

const Button = withRouter(({ history }) => (
    <button
        type='button'
        onClick={() => { history.push('/') }}
    >
      Click Me!
    </button>
));

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      successed: false
    }
  };

  onChange = e => {
    console.log(e);
  };

  login = () => {
    this.setState({
      successed: true
    })
  }

  render() {
    return (
        <div className="login__container">
          <div>

            {   !this.state.successed  &&
            <div className="login__buttons">
              <Input placeholder="CURP" allowClear onChange={this.onChange} />
              <button onClick={this.login}>Log in</button>
            </div>}
            {this.state.successed &&
                <div className="authentication__container">
                  <p>Ingresa el código</p>
                  <div>
                  <input  maxLength={1}/>
                  <input  maxLength={1}/>
                  <input  maxLength={1}/>
                  <input  maxLength={1}/>
                  <input  maxLength={1}/>
                  </div>
                  <Button/>
                </div>
            }
          </div>
        </div>
    )
  }
}


export default Login