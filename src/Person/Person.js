import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.nick} and my name is {props.name}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;