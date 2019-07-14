import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import AppointmentDetail from "./AppointmentDetail";


class AppointmentDetailContainer extends PureComponent {
  render() {
    return (
        <div className="appointment__detail--container">
          <AppointmentDetail
              drName={"Pollo"}
              date={"20 Julio 2019"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              symptons={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nunc ut consequat tincidunt. Morbi imperdiet auctor nunc, a pretium eros suscipit non."}
              medicines={"Paracetamol, Ibuprofeno"}
              imageAdded={"https://www.dailydot.com/wp-content/uploads/103/83/b3ccba23326c8e50-727x400.png"}
          />

        </div>
    )
  }
}




export default AppointmentDetailContainer