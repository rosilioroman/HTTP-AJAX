import React, { Component } from 'react';
import axios from 'axios';

import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/FriendsList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {name: '', age: 0, email: ''},
      nameInput: '',
      ageInput: '',
      emailInput: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err))
  }

  //tracks data in input fields
  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //handles form submission
  addFriendHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.nameInput,
      age: parseInt(this.state.ageInput, 10),
      email: this.state.emailInput
    })
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err));
    this.setState({
      nameInput: '',
      ageInput: '',
      emailInput: ''
    });
  }

  //handle the deletion of a friend
  deleteFriendHandler = (friendId) => {
    axios.delete(`http://localhost:5000/friends/${friendId}`)
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err));
  }

  //handle friend updates
  updateFriendHandler = (friendId) => {
    
  }

  render() {
    return (
      <div className="App">
        <AddFriendForm 
          inputChangeHandler={this.inputChangeHandler} 
          submitHandler={this.addFriendHandler} 
          currentState={this.state} 
        />
        <FriendsList 
          friendsList={this.state.friends} 
          deleteFriend={this.deleteFriendHandler}
          />
      </div>
    );
  }
}

export default App;
