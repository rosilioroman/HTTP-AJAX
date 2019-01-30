import React from 'react';

function AddFriendForm(props) {
    return (
        <form>
            <input type="text" placeholder="Name (string)" name="nameInput" onChange={props.inputChangeHandler} />
            <input type="text" placeholder="Age (number)" name="ageInput" onChange={props.inputChangeHandler} />
            <input type="text" placeholder="Email (string)" name="emailInput" onChange={props.inputChangeHandler} />
            <button>Add Friend</button>
        </form>
    );
}

export default AddFriendForm;