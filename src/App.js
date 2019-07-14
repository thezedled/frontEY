import React, { Component,  } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import "./index.css"
import 'antd/dist/antd.css';
import Dashboard from "./views/Dashboard";

import NewAppointment from "./views/NewAppointment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarCheck, faCalendarPlus, faPills, faFolder, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Login from "./views/login/Login"
import AppointmentDetailContainer from "./views/AppointmentDetail/AppointmentDetailContainer"
import AppointmentsContainer from "./views/Appointments/AppointmentsContainer"

const URL_LOGIN = new RegExp("/login", "i");

export function selectedLogin(pathname){
  return URL_LOGIN.test(pathname);
}

class App extends Component {
constructor(props){
  super(props)
this.state = {
  pathname: window.location.pathname
}}

updatePathname = () => {
  let oldPathname = this.state.pathname;
  if( oldPathname ===  window.location.pathname) {
    this.setState({
      pathname: window.location.pathname
    })
  }
}
  componentWillMount() {
    this.updatePathname()
  }
  componentWillUnmount() {
    this.updatePathname()
  }
  render() {


    const pathname = window.location.pathname;
    return (
        <Router>
        <div className="main--container">
          {!selectedLogin(pathname) &&
              <div className="nav-bar">
                <ul>
                <li><Link to={'/'}> <FontAwesomeIcon icon={faHome} size="2x"/> </Link></li>
                <li><Link to={'/appointments'} onClick={localStorage.removeItem('idComponent')} > <FontAwesomeIcon icon={faCalendarCheck} size="2x"/>  </Link></li>
                <li><Link to={'/newAppointment'}> <FontAwesomeIcon icon={faCalendarPlus} size="2x"/>  </Link></li>
{/*                <li><Link to={'/medicines'}><FontAwesomeIcon icon={faPills} size="2x"/>  </Link></li>
                <li><Link to={'/results'}><FontAwesomeIcon icon={faFolder} size="2x"/>  </Link></li>
                <li><Link to={'/help'}> <FontAwesomeIcon icon={faInfoCircle} size="2x"/> </Link></li>*/}
                </ul>
                </div>
          }

          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/newAppointment' component={NewAppointment}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/appointmentDetail' component={AppointmentDetailContainer} />
            <Route exact path='/appointments' component={AppointmentsContainer} />
          </Switch>
        </div>
        </Router>
    );
  }
}

export default withRouter(App);



