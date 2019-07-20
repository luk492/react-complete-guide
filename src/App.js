import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
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
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
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

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Test body</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
}

export default app;