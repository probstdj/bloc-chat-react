import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User'
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBYT9AyKd0hDL-2E8yVkCldI0V7-9BBFyk",
  authDomain: "bloc-chat-692be.firebaseapp.com",
  databaseURL: "https://bloc-chat-692be.firebaseio.com",
  projectId: "bloc-chat-692be",
  storageBucket: "bloc-chat-692be.appspot.com",
  messagingSenderId: "1014972627285"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      activeRoom: "",
      user: ""
    };

    this.setActiveRoom = this.setActiveRoom.bind(this)
    }

    setActiveRoom(room) {
      this.setState({ activeRoom: room });
    }

    setUser(user) {
      this.setState({ user: user });
    }

  render() {
    return (
      <div className="App">
        <aside className="side-bar">
          <h1>Bloc Chat</h1>
          <RoomList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            setActiveRoom={this.setActiveRoom.bind(this)}
          />
          <User
            firebase={firebase}
            user={this.state.user}
            setUser={this.setUser.bind(this)}
          />
        </aside>
        <main>
            <h1>{this.state.activeRoom.name}</h1>
          <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            setActiveRoom={this.setActiveRoom.bind(this)}
            user={this.state.user}
          />
        </main>
      </div>
    );
  }
  }

export default App;
