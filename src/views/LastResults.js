import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class LastResults extends PureComponent {
  render() {
    const {value, date, units, parameter, onClick} = this.props
    return (
        <div className="last__results--card" onClick={onClick}>
          <div>
            <div>
              <p>{value}</p>
              <p>{units}</p>
            </div>
            <p>{parameter}</p>
          </div>
          <p>{date}</p>
        </div>
    )
  }
}


LastResults.propTypes = {
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
  parameter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default LastResults