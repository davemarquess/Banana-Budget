import React from 'react';
import ReactDOM from 'react-dom';

class FormCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFormatError: '',
      numOfDaysFormatError: ''
    }

    this.checkValidityThenSave = this.checkValidityThenSave.bind(this);
  }

  // regex functionality to reject incorrectly formatted form inputs
  checkValidityThenSave(e) {
    let dateString = this.props.date_text;
    let numOfDays = Number(this.props.numOfDays);
    let isFormValid = true;

    let isFormatCorrect = /\d{2}\/{1}\d{2}\/{1}\d{4}/g.test(dateString);
    if (!isFormatCorrect) {
      isFormValid = false;
      this.setState({
        dateFormatError: 'Please enter date in MM/DD/YYYY format'
      }, () => console.log(this.state));
    }

    if (isFormatCorrect) {
      this.setState({
        dateFormatError: ''
      }, () => console.log(this.state));
    }

    let isNumOfDaysANumber = !!numOfDays;

    if (!isNumOfDaysANumber) {
      isFormValid = false;
      this.setState({
        numOfDaysFormatError: 'Please enter a valid number'
      }, () => console.log(this.state))
    }

    if (isNumOfDaysANumber) {
      this.setState({
        numOfDaysFormatError: ''
      }, () => console.log(this.state))
    }

    if (isFormatCorrect && isNumOfDaysANumber) {
      isFormValid = true;
    }

    if (isFormValid) {
      this.props.handleSave(e);
    }
  }

  render() {
    return (
      <div className="whiteCard">
        <form onSubmit={this.props.handleSubmit}>
          <div className="searchMainContainer">
            <div className="searchContainer">
              <div className="formHeading"><span className="banana">🍌</span> Welcome <span className="banana">🍌</span></div>

              <label>
                <div className="formDescriptionText">Tell us about your banana budget</div>

                <span className="formCardText">Start Date:  </span>
                {this.state.dateFormatError && <span className="errorMessageText">{this.state.dateFormatError}</span>}
                <input
                  className={this.state.dateFormatError ? "inputBoxesError" : "inputBoxes"}
                  type="text"
                  placeholder="Enter Date: MM/DD/YYYY"
                  value={this.props.date_text}
                  onChange={this.props.handleDateChange}
                />
              </label>

              <label>

                <span className="formCardText">Number Of Days:  </span>
                {this.state.numOfDaysFormatError && <span className="errorMessageText">{this.state.numOfDaysFormatError}</span>}
                <input
                  className={this.state.numOfDaysFormatError ? "inputBoxesError" : "inputBoxes"}
                  type="text"
                  placeholder='Enter number of days'
                  value={this.props.numberOfDays_text}
                  onChange={this.props.handleDaysChange}
                />
              </label>

            </div>
            <input className="buttonLinks" type="submit" value="Submit" onClick={this.checkValidityThenSave} />
          </div>
        </form>
      </div>
    )
  }
}

export default FormCard;
