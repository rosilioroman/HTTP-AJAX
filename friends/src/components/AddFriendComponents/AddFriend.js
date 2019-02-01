import React, { Component } from 'react';

import AddFriendForm from './AddFriendForm';

class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: {name: '', age: '', email: ''}
        }
    }

    //update newFriend. Only change the value of the property attributed to the input field
    handleChanges = e => {
        this.setState({ newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            } 
        })
    }

    //calls the addFriendHandler method in App.js
    addFriend = e => {
        e.preventDefault();
        this.props.addFriendHandler(this.state.newFriend); //pass the current newFriend object as an argument
        //reset the newFriend object
        this.setState({
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        return (
            <div className="add-friend-wrapper">
                <h2>Add a new friend:</h2>
                <AddFriendForm 
                    newFriend={this.state.newFriend} 
                    handleChanges={this.handleChanges}
                    addFriend={this.addFriend}
                />
            </div>
        );
    }
}

export default AddFriend;