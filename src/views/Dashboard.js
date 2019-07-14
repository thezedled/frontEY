import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PersonalInfo from "./PersonalInfo";
import LastAppointment from "./lastAppointment";
import LastResults from "./LastResults";
import CustomCalendar from "./calendarSection/CustomCalendar";
import { getPosts, ultimate, lab, calendar } from "../utils/api";
import { isNullLiteral, isEmptyStatement } from "@babel/types";
import isNil from "lodash/isNil";
import isEmpty from 'lodash/isEmpty';
import moment from "moment";
import { Link } from "react-router-dom";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      ultimate: [],
      lab: [],
      calendar:[],
      loading: true
    };
  }

  componentDidMount() {
    calendar()
      .then(res => {
        if (isNil(res) === false) {
          this.setState({
            calendar: res.data,
            loading: false
          });
        }
      })
      .catch(err => console.log(err));


    lab()
      .then(res => {
        if (isNil(res) === false) {
          this.setState({
            lab: res.data.result,
            loading: false
          });
        }
      })
      .catch(err => console.log(err));

    ultimate()
      .then(res => {
        if (isNil(res) === false) {
          this.setState({
            ultimate: res.data.result,
            loading: false
          });
        }
      })
      .catch(err => console.log(err));

    getPosts()
      .then(res => {
        if (isNil(res) === false) {
          this.setState({
            posts: res.data.result,
            loading: false
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {

    console.log('this.state.lab.fecha', typeof this.state.lab.fecha);
    

    return (
      <div className="dashboard">
        <PersonalInfo
          weight={`${this.state.posts.peso} kg`}
          organDonor={true}
          name={this.state.posts.nombre}
          gender={this.state.posts.sexo}
          height={`${this.state.posts.altura} cm`}
          age={this.state.posts.edad}
          bloodType={this.state.posts.gpo_sanguineo}
          imageURL={this.state.posts.imagen}
        />
        <div className="cards__container">
          <div className="last__values--container">
          <Link to="/appointmentDetail"><LastAppointment
              date={moment(this.state.ultimate.fecha).format("DD MMM YY")}
              onClick={() => {}}
              drName={this.state.ultimate.Doctor}
              medicine={this.state.ultimate.Medicamento}
            /></Link>
            <Link to="/newAppointment">
              <div className="dashboard__buttons ">
                <button>Agregar nueva consulta</button>
              </div>
            </Link>
{/*            <LastResults
              date={moment(this.state.lab.fecha).format("DD MMM YY")}
              value={this.state.lab.valor}
              units={"mg/ul"}
              parameter={this.state.lab.estudio}
              onClick={() => {}}
            />*/}
          </div>
          <div className="container__row space__between ">
            {isEmpty(this.state.calendar) === false  ? ( <CustomCalendar value={moment('2010-10-10', 'YYYY-MM-DD').value} data={this.state.calendar} />) : null }
           

          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
