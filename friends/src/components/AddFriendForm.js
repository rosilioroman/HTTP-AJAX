import React from 'react';
import PropType from 'prop-types';

function AddFriendForm(props) {
    return(
        <form onSubmit={props.addFriend} >
            <input 
                type="text"
                placeholder="name.."
                name="name" 
                value={props.newFriend.name}
                onChange={props.handleChanges}
            />
            <input 
                type="text"
                placeholder="age.."
                name="age"
                value={props.newFriend.age}
                onChange={props.handleChanges}
            />
            <input 
                type="text"
                placeholder="email.."
                name="email"
                value={props.newFriend.email}
                onChange={props.handleChanges}
            />
            <button>Add</button>
        </form>
    );
}

AddFriendForm.propType = {
    newFriend: PropType.shape({
        name: PropType.string,
        age: PropType.number,
        email: PropType.string
    }),
    handleChanges: PropType.func
}

export default AddFriendForm;