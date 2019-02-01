import React from 'react';

class PastBudgetsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budgetsArray: [],
      hideFetchButton: false
    }
    this.handleFetchBudgets = this.handleFetchBudgets.bind(this);
  }

  handleFetchBudgets() {
    const budgetArray = [];

    fetch('http://localhost:3000/bananas')
      .then((res) => res.json())
      .then(arr => this.setState({
        budgetsArray: arr,
        hideFetchButton: true
      }));
  }

  render() {
    return (
      <div className={!this.state.hideFetchButton ? "whiteCardTransparent" : "whiteCardColumn"}>
        {!this.state.hideFetchButton &&
          <div className="searchMainContainer">
            <div className="searchContainer">
              <label>
                <input className="buttonLinkss" id="buttonLinks2" type="submit" value="Retrieve Past Budgets" onClick={this.handleFetchBudgets} />
              </label>
            </div>
          </div>}
        {this.state.budgetsArray.map((budgetObj, index) => (
          <div className="whiteCardData" key={index + 'budget'}>
            <div className="formText2">
              <div className="budgetDataText">Start Date: <span className="yellowDataText"> {budgetObj.startDate}</span></div>
              <div className="budgetDataText">Number Of Days: <span className="yellowDataText"> {budgetObj.numberOfDays}</span></div>
              <div>Total Cost: <span className="yellowDataText"> {budgetObj.startDate}</span></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PastBudgetsCard;