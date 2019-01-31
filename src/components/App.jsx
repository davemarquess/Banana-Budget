import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import '../../styles.scss';

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
            handleSubmit={this.handleSubmit}
          />
        </div>

      </div>
    );
  }
}

export default App;
