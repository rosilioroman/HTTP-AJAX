import React from 'react';

function Friend(props) {
    return (
        <section>
            <p>Name: {props.friendObj.name}</p>
            <p>Age: {props.friendObj.age}</p>
            <p>Email: {props.friendObj.email}</p>
            <div onClick={ () => {props.deleteFriend(props.friendObj.id)}}>Delete Me FOREVER?</div>
        </section>
    );
}

export default Friend;