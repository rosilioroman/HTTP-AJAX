import React from 'react';

function Friend(props) {
    return (
        <div>
            <p>Name: {props.friendObj.name}</p>
            <p>Age: {props.friendObj.age}</p>
            <p>Email: {props.friendObj.email}</p>
        </div>
    );
}

export default Friend;