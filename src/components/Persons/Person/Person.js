import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default person;