import React from 'react';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div style={style}>
            <p onClick={props.click}>I'm a {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default Radium(person);