import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="whiteCard">
        <form onSubmit={this.props.handleSubmit}>
          <div className="searchMainContainer">
            <div className="searchContainer">
              <div className="formHeading"><span className="banana">🍌</span> Welcome <span className="banana">🍌</span></div>

              <label>
                <span className="formText">Date:  </span>
                <input
                  className="inputBoxes"
                  type="text"
                  placeholder="Enter Date: MM/DD/YYYY"
                  value={this.props.date_text}
                  onChange={this.props.handleDateChange}
                />
              </label>

              <label>
                <span className="formText">Number Of Days:  </span>
                <input
                  className="inputBoxes"
                  type="text"
                  placeholder='Enter number of days'
                  value={this.props.numberOfDays_text}
                  onChange={this.props.handleDaysChange}
                />
              </label>

            </div>
            <input className="buttonLinks" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Card;
