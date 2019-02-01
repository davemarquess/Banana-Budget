import React from 'react';
import ReactDOM from 'react-dom';
import FormCard from './FormCard.jsx';
import TotalCostCard from './TotalCostCard.jsx';
import '../../styles.scss';
import { resolve } from 'path';
const moment = require('moment');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date_text: '',
      numberOfDays_text: 0,
      showForm: true,
      showTotalCost: false,
      totalCost: '',
      calendar: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      weekDays: ['M', 'T', 'W', 'R', 'F']
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDaysChange = this.handleDaysChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.calculateTotalCost = this.calculateTotalCost.bind(this);
  }

  calculateTotalCost() {
    const numOfDays = this.state.numberOfDays_text;
    const dateArr = this.state.date_text.split('');
    const dateStringNew = `${dateArr.slice(6).join('')}-${dateArr.slice(0, 2).join('')}-${dateArr.slice(3, 5).join('')}`;

    const dayOfWeek = moment(new Date(dateStringNew)).day(); // weekday number --> 01 === Monday
    // console.log('dayOfWeek: ', dayOfWeek);

    const dayOfMonth = Number(dateArr.slice(3, 5).join(''));

    const month = Number(dateArr.slice(0, 2).join('')) - 1; // month number --> 00 === January

    let monthCopy = month;

    const daysInMonth = this.state.calendar[month]; // number of days in month

    let result = 0;

    for (let i = 0, x = dayOfMonth, d = dayOfWeek; i < numOfDays; i += 1) {
      isItWeekDay(d) ? resultMoneyAdd(x) : '';
      d = handleDay(d);
      x = changeMonth(x);
      // console.log('x: ', x);
      // console.log('monthCopy: ', monthCopy);
    }

    // helper function for incrementing month and resetting day of month
    function changeMonth(x) {
      if (monthCopy === 0 || monthCopy === 2 || monthCopy === 4 ||
        monthCopy === 6 || monthCopy === 7 || monthCopy === 9 || monthCopy === 11) {
        if (x === 31) {
          x = 0;
          monthCopy += 1;
        } else {
          x += 1;
        }
      } else if (monthCopy === 1 && x === 28) {
        x = 0;
        monthCopy += 1;
      } else if (monthCopy === 1 && x !== 28) {
        x += 1;
      } else if (monthCopy === 3 || monthCopy === 5 || monthCopy === 8 || monthCopy === 10) {
        if (x === 30) {
          x = 0;
          monthCopy += 1;
        } else {
          x += 1;
        }
      }
      return x;
    }

    // helper function to increment day or reset to 01 if Monday
    function handleDay(d) {
      if (d < 7) {
        d += 1;
      } else if (d === 7) {
        d = 1;
      }
      return d;
    }
    // helper function to check if current day is week day
    function isItWeekDay(d) {
      if (d <= 5) {
        return true;
      } else return false;
    }

    // helper function to add money for corresponding day of month
    function resultMoneyAdd(x) {
      if (x <= 7) result += 0.05;
      if (x > 7 && x <= 14) result += 0.1;
      if (x > 14 && x <= 21) result += 0.15;
      if (x > 21 && x <= 28) result += 0.2;
      if (x > 28 && x <= 31) result += 0.25;
      // console.log('result: ', result)
    }
    console.log('result: ', result)
    this.setState({ totalCost: `$${result.toFixed(2)}` });
  }

  handleDateChange(e) {
    this.setState({ date_text: e.target.value })
  }

  handleDaysChange(e) {
    this.setState({ numberOfDays_text: e.target.value })
  }

  handleSubmit(e) {
    console.log('submitted!');
    e.preventDefault();
  }

  handleReset() {
    this.setState({
      date_text: '',
      numberOfDays_text: 0
    });
  }

  handleSave(event) {
    this.calculateTotalCost();

    this.setState({
      showForm: false,
      showTotalCost: true,
    });

    event.preventDefault();
    // console.log('running!')
    const { date_text, numberOfDays_text } = this.state;
    // console.log('numberOfDays_text: ', numberOfDays_text);
    // console.log('date_text: ', date_text);
    this.handleReset();
    // fetch('http://localhost:3000/bananas',
    //   {
    //     method: 'POST',
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //     body: JSON.stringify({
    //       startDate: date_text,
    //       numberOfDays: numberOfDays_text
    //     })
    //   })
    //   .then((res) => res.json())
    //   .then(res => console.log(res))
  }

  render() {
    return (
      <div>

        <div className="headingCard">
          <h1 className="heading">🍌💲 Bob's Banana Budget 💲🍌</h1>
          <br></br>
        </div>

        {this.state.showForm && <div className="cardContainer">
          <FormCard
            date_text={this.state.date_text}
            handleDateChange={this.handleDateChange}
            handleDaysChange={this.handleDaysChange}
            handleSave={this.handleSave}
            handleSubmit={this.handleSubmit}
          />
        </div>}

        {this.state.showTotalCost && <div className="cardContainer">
          <TotalCostCard
            totalCost={this.state.totalCost}
          />
        </div>}

      </div>
    );
  }
}

export default App;
