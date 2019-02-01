import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: props.history
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>Name: {this.props.friendObj.name}</p>
                    <p>Age: {this.props.friendObj.age}</p>
                    <p>Email: {this.props.friendObj.email}</p>
                    <div onClick={ () => {this.props.deleteFriend(this.props.friendObj.id, this.state.history)}}>Delete Me FOREVER?</div>
                </div>
                <Link to={`/friends/${this.props.friendObj.id}/update`}>Update Friend</Link>
            </div>
        );
    }
}

export default Friend;