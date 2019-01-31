import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedFriend: {name: '', age: '', email: ''}
        }
    }

    updateFriend = e => {
        e.preventDefault();
        this.props.updateFriend(this.props.friendObj.id, this.state.updatedFriend);
    }

    render() {
        return (
            <div>
                <Link to={`/friend/${this.props.friendObj.id}`}>
                    <p>Name: {this.props.friendObj.name}</p>
                    <p>Age: {this.props.friendObj.age}</p>
                    <p>Email: {this.props.friendObj.email}</p>
                    <div onClick={ () => {this.props.deleteFriend(this.props.friendObj.id)}}>Delete Me FOREVER?</div>
                </Link>
                <Link to={`/friends/${this.props.friendObj.id}/update`}>Update Friend</Link>
            </div>
        );
    }
}

export default Friend;