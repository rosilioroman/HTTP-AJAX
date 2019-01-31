import React from 'react';

import Friend from './Friend';

function FriendsList(props) {
    return (
        <section>
            {props.friendsList.map(f => <Friend friendObj={f} key={f.id} deleteFriend={props.deleteFriend} updateFriend={props.updateFriend}/>)}
        </section>
    );
}

export default FriendsList;