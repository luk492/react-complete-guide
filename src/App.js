import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Bruce',
        age: 56
      },
      {
        name: 'Clark',
        age: 65
      },
      {
        name: 'Flash',
        age: 29
      }
    ],
    showPersons: false
  };

  switchNameHandler() {
    this.setState({
      persons: [
        {
          name: 'Bruce2',
          age: 56
        },
        {
          name: 'Clark2',
          age: 65
        },
        {
          name: 'Flash2',
          age: 29
        }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    return (
        <div className="App">
          <h1>Hi</h1>
          <button onClick={this.togglePersonsHandler}>Switch Name</button>
          {
            this.state.showPersons ? 
              <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Test body</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
              </div> : null
          }
        </div>
      );
    }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
}

export default App;