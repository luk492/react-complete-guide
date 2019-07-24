import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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

  deletePersonHandler(idx) {
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
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, idx) => {
              return <Person changed={(event) => this.nameChangedHandler(event, person.id)} click={this.deletePersonHandler.bind(this, idx)} name={person.name} age={person.age} key={person.id}/>
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi</h1>
          <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
      </StyleRoot>
      );
    }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
}

export default Radium(App);