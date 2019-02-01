import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import '../../styles.scss';
import { resolve } from 'path';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date_text: '',
      numberOfDays_text: ''
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDaysChange = this.handleDaysChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleReset = this.handleReset.bind(this);
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
      numberOfDays_text: ''
    });
  }

  handleSave(event) {
    event.preventDefault();
    // console.log('running!')
    const { date_text, numberOfDays_text } = this.state;
    // console.log('numberOfDays_text: ', numberOfDays_text);
    // console.log('date_text: ', date_text);
    this.handleReset();
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
          numberOfDays: numberOfDays_text
        })
      })
      .then((res) => res.json())
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>

        <div className="headingCard">
          <h1 className="heading">🍌💲 Bob's Banana Budget 💲🍌</h1>
          <br></br>
        </div>

        <div className="cardContainer">
          <Card
            date_text={this.state.date_text}
            handleDateChange={this.handleDateChange}
            handleDaysChange={this.handleDaysChange}
            handleSave={this.handleSave}
            handleSubmit={this.handleSubmit}
          />
        </div>

      </div>
    );
  }
}

export default App;
