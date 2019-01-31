import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import PageHeader from './components/PageHeader';

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

    //create a new object with age as an integer
    const friendWithAge = {
      ...friend,
      age: ageAsInteger
    }

    //pass this friendWithAge object as parameter in the axios.POST request
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
          path="/" 
          render={ props => 
            <FriendsList 
              {...props} 
              friendsList={this.state.friends} 
              deleteFriend={this.deleteFriendHandler} 
            />
          } 
        />
      </div>
    );
  }
}

export default App;
