import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PersonalInfo from "./PersonalInfo";
import LastAppointment from "./lastAppointment";
import LastResults from "./LastResults";


class Dashboard extends PureComponent {
  render() {
    return (
        <div className="dashboard">
            <PersonalInfo
                weight={"20kg"}
                organDonor={true}
                name={"Pedro"}
                gender={"Masculino"}
                height={"1.68"}
                age={"20"}
                bloodType={"A+"}
                imageURL="https://botlist.imgix.net/2635/c/submission1570rao3Hr-medium.jpg?auto=compress"
            />
            <div className="last__values--container" >
              <LastAppointment
                  date={"26 junio 2019"}
                  onClick={ ()=> {}}
                  drName={ "Dr Pollo"}
                  medicine={"Paracetamol"}
              />
              <LastResults
                  date={"28 junio 2019"}
                  value={200}
                  units={"mg/ul"}
                  parameter={"Colesterol"}
                  onClick={()=>{}}
              />
            </div>
        </div>
  )
  }
}


export default Dashboard