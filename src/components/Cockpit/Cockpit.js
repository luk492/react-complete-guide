import React from 'react';

const cockpit = (props) => (
    <div>
        <h1>Hi</h1>
        <p>Toggle persons</p>
        <button style={props.style} onClick={props.clicked}>Switch Name</button>
    </div>
);

export default cockpit;