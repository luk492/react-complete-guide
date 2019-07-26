import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {
        name: 'Bruce',
        age: 56,
        id: '112d12d'
      },
      {
        name: 'Clark',
        age: 65,
        id: '123123'
      },
      {
        name: 'Flash',
        age: 29,
        id: '11d12d'
      }
    ],
    showPersons: false
  };

  deletePersonHandler = (idx) => {
    const persons = this.state.persons.slice();
    persons.splice(idx, 1);
    this.setState({persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex((person) => person.id === id);

    const person = {...this.state.persons[personIdx]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIdx] = person;


    this.setState({persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}/>
        </div>
      );

      style.backgroundColor = classes.red;
    }
    return (
        <div className={classes.App}>
          <Cockpit style={style} clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
      );
    }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
}

export default App;