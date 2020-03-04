// a couple of functions from the React library
import React, { Component } from "react";

// import components
import Helmet from "./Components/Helmet";
import Header from "./Components/Header";
import InstructionButton from "./Components/InstructionButton";
import MessageInputForm from "./Components/MessageInputForm";
import Aside from "./Components/Aside";
import EachMessage from "./Components/EachMessage";

// import firebase
import firebase from "./firebase";

// import sweet alerts
import Swal from "sweetalert2";

// CSS for the `App` component
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      asideOpen: true,
      messages: [],
      userInput: "",
      userName: "",
      userImg: "",
      userColor: "default"
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

    // 🧠 create a variable that holds a reference to the user's name.
    let userName;

    Swal.fire({
      icon: "question",
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: false,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: login => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: false
    })
      .then(result => {
        if (result.value) {
          Swal.fire({
            title: `Here is ${result.value.login}'s avatar!`,
            imageUrl: result.value.avatar_url
          });
          this.setState({
            userImg: result.value.avatar_url
          });

          // 🧠 user select their color, once selected userColor in state pushed to message array and used to change only their message bubble:

          (async () => {
            /* inputOptions can be an object or Promise */
            const inputOptions = new Promise(resolve => {
              setTimeout(() => {
                resolve({
                  redBubble: "nickRed",
                  yellowBubble: "Yellow",
                  tealBubble: "Teal",
                  olgaBubble: "olgaPurple",
                  blackBubble: "Black",
                  default: "Default"
                });
              }, 1000);
            });

            const { value: color } = await Swal.fire({
              title: "Select color",
              input: "radio",
              inputOptions: inputOptions,
              inputValidator: value => {
                if (!value) {
                  return "You need to choose something!";
                }
              }
            });

            if (color) {
              Swal.fire({ html: `You selected: ${color}` });
            }
            this.setState({
              userColor: color
            });
          })();
        }
        userName = result.value.login;

        this.setState({
          userName: userName
        });
      })
      .then(() => {
        this.scrollToBottom();
      });

    // 🧠 event listener that takes a callback function used to get data from the database and call it response.
    dbRef.on("value", response => {
      const dataFromDb = response.val();
      // see the information and parse the way we want it.

      // create a variable to store the new state.
      const newState = [];

      // loop over each value in the array and push them to a new array (newState).
      for (let key in dataFromDb) {
        const messageInfo = {
          key: key,
          message: dataFromDb[key]
        };
        newState.push(messageInfo);
      }
      // call this.setState to update the component state using the local array newState.
      this.setState({
        messages: newState,
        userName
      });
    });
  }

  scrollToBottom = () => {
    const chatDiv = document.querySelector(".chatDisplay");
    chatDiv.scrollTop = chatDiv.scrollHeight;
  };


  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  // 🧠 on submit, push user input into firebase
  handleFormSubmit = e => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push({
      userInput: this.state.userInput,
      userName: this.state.userName,
      userImg: this.state.userImg,
      userColor: this.state.userColor
    });
    // return input to empty.
    // eslint-disable-next-line
    this.state.userInput = "";
  };

  render() {
    // if statement for the aside state of being open or closed.

    let asideDrawer;

    if (this.state.asideOpen) {
      asideDrawer = <Aside />;
    }

    return (
      <div className="App">
        <Helmet />

        {/* toggle function adding class to aside drawer passesd into button component  */}
        <InstructionButton click={this.asideToggleClickHandler} />

        <header>
          <Header />
        </header>

        {/* the aside drawer */}
        {asideDrawer}

        <div className="mainGrid">
          <div className="chatDisplay">
            {this.state.messages.map(message => (
                // Div containers for each message.
                <EachMessage msgProp={message} />
              ))}
          </div>

          {/* input field for user to type their message, passing function into component */}
          <MessageInputForm handleFormSubmit={this.handleFormSubmit} handleChange={this.handleChange} userInputProp={this.state.userInput}/>
        </div>
      </div>
    );
  }
}

export default App;
