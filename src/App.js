// a couple of functions from the React library
import React, { Component } from 'react';

// import components
import Helmet from './Components/Helmet';
import Header from './Components/Header';
import InstructionButton from './Components/InstructionButton';
import MessageInputForm from './Components/MessageInputForm';
import Aside from './Components/Aside';

// import firebase
import firebase from './firebase';

// CSS for the `App` component
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      asideOpen: true,
      messages: [],
      userInput: ""
    };
  }

  // function to slide the aside in and out.
  asideToggleClickHandler = () => {
    this.setState(prevState => {
      return { asideOpen: !prevState.asideOpen };
    });
  };

  // function for the chat input and display
  componentDidMount() {
    // create a variable that holds a reference to  database
    const dbRef = firebase.database().ref();

    // event listener that takes a callback function used to get data from the database and call it response.
    dbRef.on("value", response => {
      const dataFromDb = response.val();
      // see the information and parse the way we want it.
      console.log("dataFromDb", dataFromDb);

      // create a variable to store the new state.
      const newState = [];

      // loop over each value in the array and push them to a new array (newState).
      for (let key in dataFromDb) {
        const messageInfo = {
          key: key,
          name: dataFromDb[key]
        };
        newState.push(messageInfo);
      }
      console.log('newState Array:', newState);
      // call this.setState to update the component state using the local array newState.
      this.setState({
        messages: newState
      });
    });
  }

  // on submit, push user input into firebase
  handleFormSubmit = e => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);
    this.setState({
      userInput: ""
    });
  };


  render() {
    let asideDrawer;

    if (this.state.asideOpen) {
      asideDrawer = <Aside />;
    }

    return (
      <div className="App">
        <Helmet />
        <InstructionButton click={this.asideToggleClickHandler} />
        <header>
          <Header />
        </header>
        {asideDrawer}

        <div className="mainGrid">
          <div className="chatDisplay">
            {this.state.messages.map(message => {
              return (
                <div className="userText" key={message.key}>
                  <button className="cross" onClick={()=>{this.remove(this.newState.id)}}>X</button><p>User: {message.key}, says:</p>
                  <p>{message.name}</p>
                </div>
              );
            })}
          </div>
          <MessageInputForm handleFormSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default App;