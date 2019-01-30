import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/Friends';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <FriendsList friendsList={this.state.friends} />
      </div>
    );
  }
}

export default App;
