import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PersonalInfo from "./PersonalInfo";
import LastAppointment from "./lastAppointment";
import LastResults from "./LastResults";
import CustomCalendar from "./calendarSection/CustomCalendar";
import { getPosts, ultimate, lab } from "../utils/api";
import { isNullLiteral } from "@babel/types";
import isNil from "lodash/isNil";
import moment from "moment";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      ultimate: [],
      lab: [],
      loading: true
    };
  }

  componentDidMount() {
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
            <LastAppointment
              date={moment(this.state.ultimate.fecha).format("DD MMM YY")}
              onClick={() => {}}
              drName={this.state.ultimate.doctor}
              medicine={this.state.ultimate.medicamentos}
            />
            <LastResults
              date={moment(this.state.lab.fecha).format("DD MMM YY")}
              value={this.state.lab.valor}
              units={"mg/ul"}
              parameter={this.state.lab.estudio}
              onClick={() => {}}
            />
          </div>
          <div className="container__row space__between ">
            <CustomCalendar value={moment('2010-10-10', 'YYYY-MM-DD').value} data={[{ dia: 16 }, { dia: 17 }, { dia: 18 }]} />
            <div className="dashboard__buttons ">
              <button>Nueva consulta</button>
              <button>Nuevo Resultado</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
