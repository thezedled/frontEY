import React, { Component,  } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./index.css"
import 'antd/dist/antd.css';
import Dashboard from "./views/Dashboard";

import NewAppointment from "./views/NewAppointment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarCheck, faCalendarPlus, faPills, faFolder, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Login from "./views/login/Login"

const URL_LOGIN = new RegExp("/login", "i");

export function selectedLogin(pathname){
  return URL_LOGIN.test(pathname);
}

class App extends Component {
  state = {
    collapsed: false,
  };
  render() {
    const pathname = window.location.pathname;
    console.log(pathname);
    return (
        <Router>
        <div className="main--container">
          {!selectedLogin(pathname) &&
              <div className="nav-bar">
                <ul>
                <li><Link to={'/'}> <FontAwesomeIcon icon={faHome} size="2x"/> </Link></li>
                <li><Link to={'/appointments'}> <FontAwesomeIcon icon={faCalendarCheck} size="2x"/>  </Link></li>
                <li><Link to={'/newAppointment'}> <FontAwesomeIcon icon={faCalendarPlus} size="2x"/>  </Link></li>
                <li><Link to={'/medicines'}><FontAwesomeIcon icon={faPills} size="2x"/>  </Link></li>
                <li><Link to={'/results'}><FontAwesomeIcon icon={faFolder} size="2x"/>  </Link></li>
                <li><Link to={'/help'}> <FontAwesomeIcon icon={faInfoCircle} size="2x"/> </Link></li>
                </ul>
                </div>
          }

          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/newAppointment' component={NewAppointment}/>
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
        </Router>
    );
  }
}

export default App;



