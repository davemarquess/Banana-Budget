import React from 'react';

class TotalCostCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { date_text, numberOfDays_text, totalCost } = this.props;
    fetch('http://localhost:3000/bananas',
      {
        method: 'POST',
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          startDate: date_text,
          numberOfDays: numberOfDays_text,
          totalCost: totalCost
        })
      })
      .then((res) => res.json())
      .then(res => console.log(res))
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