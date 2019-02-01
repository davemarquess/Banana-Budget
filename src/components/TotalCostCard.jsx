import React from 'react';

class TotalCostCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="whiteCard">
        <div className="searchMainContainer">
          <div className="searchContainer">
            <div className="totalCostHeading"><span className="banana">🍌</span> Total Cost <span className="banana">🍌</span></div>
            <label>

              <span className="totalCostText">{this.props.totalCost}</span>

            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default TotalCostCard;