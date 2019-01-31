import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import PageHeader from './components/PageHeader';
import UpdateFriend from './components/UpdateFriend';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  //when the component mounts, fetch the friends list from the API
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err))
  }


  //handles adding a new friend
  addFriendHandler = friend => {
    //convert the age value of the new friend being added into an integer
    const ageAsInteger = parseInt(friend.age);

    //if ageAsInteger can't be converted to an integer, handle this error
    if(!ageAsInteger) {
      alert("The 'age' field has to be a whole number!");
      return console.log('Error: new friend cannot be added');
    }

    //create a new object and update its age value
    const friendWithAge = {
      ...friend,
      age: ageAsInteger
    }

    //pass this friendWithAge object as parameter in the axios.POST method
    axios.post('http://localhost:5000/friends', friendWithAge)
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err));
  }

  //handle the deletion of a friend
  deleteFriendHandler = (friendId) => {
    //friendId comes from the id property of the friend object that will be deleted
    axios.delete(`http://localhost:5000/friends/${friendId}`)
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err));
  }

  //handles updating a friend's info
  updateFriendHandler = (friendId, update, goHome) => {
    axios.put(`http://localhost:5000/friends/${friendId}`, update)
    .then(res => {
      this.setState({ friends: res.data });
      goHome.push('/');
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PageHeader />
        <Route 
          path="/add" 
          render={ props => 
            <AddFriend 
              {...props} 
              addFriendHandler={this.addFriendHandler}
            />
          } 
        />
        <Route 
          path="/friends/:id/update"
          render={props => 
            <UpdateFriend 
              {...props} 
              handleUpdates={this.handleUpdates}
              updatedFriend={this.state.updatedFriend}
              updateFriendHandler={this.updateFriendHandler}
            />
          }
        />
        <Route 
          path="/" 
          render={ props => 
            <FriendsList 
              {...props} 
              friendsList={this.state.friends} 
              deleteFriend={this.deleteFriendHandler}
              updateFriend={this.updateFriendHandler} 
            />
          } 
        />
      </div>
    );
  }
}

export default App;
