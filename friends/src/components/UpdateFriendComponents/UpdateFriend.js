import React, { Component } from 'react';

class UpdateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedFriend: {name: '', age: '', email: ''},
            friendId: props.match.params.id,
            history: props.history
        }
    }

    updateFriend = e => {
        e.preventDefault();
        this.props.updateFriendHandler(this.state.friendId, this.state.updatedFriend, this.state.history);
        this.setState({ updatedFriend: {name: '', age: '', email: ''}});
    }

    //handle changes for updatedFriend. Only change the value of the property attributed to the input field
    handleUpdates = e => {
        this.setState({ updatedFriend: {
                ...this.state.updatedFriend,
                [e.target.name]: e.target.value
            } 
        })
    }

    render() {

        return (
            <form onSubmit={this.updateFriend}>
                <input 
                    type="text"
                    placeholder="Updated name.."
                    name="name"
                    value={this.state.updatedFriend.name}
                    onChange={this.handleUpdates}
                />
                <input 
                    type="text"
                    placeholder="Updated age.."
                    name="age"
                    value={this.state.updatedFriend.age}
                    onChange={this.handleUpdates}
                />
                <input 
                    type="text"
                    placeholder="Updated email.."
                    name="email"
                    value={this.state.updatedFriend.email}
                    onChange={this.handleUpdates}
                />
                <button>Update</button>
            </form>
        )
    }
}

export default UpdateFriend;