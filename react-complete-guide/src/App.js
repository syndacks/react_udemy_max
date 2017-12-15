import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Dacks', age: 31 },
      { name: 'Clint', age: 29 },
      { name: 'Veronica', age: 26 },
    ]
  }

  onButtonClickHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Clint Milliken', age: 29 },
        { name: 'Veronica Milliken', age: 26 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        // this syntax can be ineffecient
        <button onClick={() => this.onButtonClickHandler('Syndacks Millitance')}>Click Me</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.onButtonClickHandler.bind(this, 'Bound_Name')}
          />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          />
      </div>
    );
  }
}

export default App;
