import React, { Component } from 'react';
import axios from 'axios';

import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/Friends';

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

  }

  render() {
    return (
      <div className="App">
        <FriendsList friendsList={this.state.friends} />
        <AddFriendForm inputChangeHandler={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;
