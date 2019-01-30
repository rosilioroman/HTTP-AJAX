import React from 'react';

function AddFriendForm(props) {
    return (
        <div>
            <h1>Friends List</h1>
            <form onSubmit={props.submitHandler} >
                <input type="text" placeholder="Name (string)" name="nameInput" onChange={props.inputChangeHandler} value={props.currentState.nameInput}/>
                <input type="text" placeholder="Age (number)" name="ageInput" onChange={props.inputChangeHandler} value={props.currentState.ageInput} />
                <input type="text" placeholder="Email (string)" name="emailInput" onChange={props.inputChangeHandler} value={props.currentState.emailInput} />
                <button>Add Friend</button>
            </form>
        </div>
    );
}

export default AddFriendForm;