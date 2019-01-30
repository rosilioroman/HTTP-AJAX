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

  render() {
    return (
      <div className="App">
        <FriendsList friendsList={this.state.friends} />
        <AddFriendForm 
          inputChangeHandler={this.inputChangeHandler} 
          submitHandler={this.addFriendHandler} 
          currentState={this.state} 
        />
      </div>
    );
  }
}

export default App;
