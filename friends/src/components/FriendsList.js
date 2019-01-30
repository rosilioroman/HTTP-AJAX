import React from 'react';

import Friend from './Friend';

function FriendsList(props) {
    return (
        props.friendsList.map(f => <Friend friendObj={f} key={f.id} deleteFriend={props.deleteFriend}/>)
    );
}

export default FriendsList;