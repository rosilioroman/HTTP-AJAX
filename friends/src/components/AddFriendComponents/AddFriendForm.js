import React from 'react';

import './Add.css';

function AddFriendForm(props) {
    return(
        <form onSubmit={props.addFriend} className="input-form">
            <input
                className="input-field" 
                type="text"
                placeholder="name.."
                name="name" 
                value={props.newFriend.name}
                onChange={props.handleChanges}
            />
            <input
                className="input-field" 
                type="text"
                placeholder="age.."
                name="age"
                value={props.newFriend.age}
                onChange={props.handleChanges}
            />
            <input
                className="input-field" 
                type="text"
                placeholder="email.."
                name="email"
                value={props.newFriend.email}
                onChange={props.handleChanges}
            />
            <button className="input-btn">+</button>
        </form>
    );
}

export default AddFriendForm;