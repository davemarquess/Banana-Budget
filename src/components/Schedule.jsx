import React from 'react';
import moment from 'moment';
const _ = require('lodash');

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      num: 10
    };
  }

  handleUpdateDate() {
    this.setState({
      date: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
  }

  handleUpdateNum() {
    this.setState({
      num: _.multiply(this.state.num, 2)
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>6/5 @ Evergreens</li>
          <li>6/8 vs Kickers</li>
          <li>6/14 @ United</li>
          <button
            onClick={() => this.handleUpdateDate()}>
            Generate Date
          </button>
          <button
            onClick={() => this.handleUpdateNum()}>
            Generate Numberrr
          </button>
        </ul>
        <h3>{this.state.date}</h3>
        <br></br>
        <h3>{this.state.num}</h3>
      </div >
    )
  }
}

export default Schedule;
