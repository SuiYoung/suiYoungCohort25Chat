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
      userInput: "",
      userName: ""
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

      // create a variable that holds a reference to the user's name.
      const userName = prompt(`What's your name?`);

      // loop over each value in the array and push them to a new array (newState).
      for (let key in dataFromDb) {
        const messageInfo = {
          key: key,
          message: dataFromDb[key]

        };
        newState.push(messageInfo);
      }
      console.log('newState Array:', newState);
      // call this.setState to update the component state using the local array newState.
      this.setState({
        messages: newState,
        userName
      });
    });
  }

  // on submit, push user input into firebase
  handleFormSubmit = userInput => {
    console.log('hello?')
    // e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push({
      userInput,
      userName: this.state.userName
    });
    // this.setState({
    //   userInput: ""
    // });
  };

  render() {
    // username prompt
    

    // if statement for the aside state of being open or closed.
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
                  <button className="cross" onClick={()=>{this.remove(this.newState.id)}}>X</button><p>User: {message.message.userName}, says:</p>
                  <p>{message.message.userInput}</p>
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

 
