// a couple of functions from the React library
import React, { Component } from 'react';

// import components
import Helmet from './Components/Helmet';
import Header from './Components/Header';
import InstructionButton from './Components/InstructionButton';
import Main from './Components/Main';
import Aside from './Components/Aside';
import Footer from './Components/Footer';

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
    // create a variable that holds a reference to our database
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

      // call this.setState to update the component state using the local array newState.
      this.setState({
        messages: newState
      });
    });
  }

  handleChange = e => {
    // console.log('Things are changing', e.target.value);
    this.setState({
      userInput: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault(); // default behavior of a form is to refresh the page. Stop this.
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
          <Main />
          
        {/* may not need footer */}
        <Footer />
      </div>
    );
  }
}

export default App;