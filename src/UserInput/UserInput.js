import React, {Component} from 'react';

const UserInput = props => {
    const style = {
        backgroundColor: '#ddd'
    }
    return (
            <input type="text" style={style} onChange={props.change} value={props.username}/>
    )
}


export default UserInput;