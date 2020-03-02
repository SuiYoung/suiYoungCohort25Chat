// a couple of functions from the React library
import React, { Component } from "react";

// import components
import Helmet from "./Components/Helmet";
import Header from "./Components/Header";
import InstructionButton from "./Components/InstructionButton";
import MessageInputForm from "./Components/MessageInputForm";
import Aside from "./Components/Aside";

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
      userID: "",
      userImg: ""
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

    // create a variable that holds a reference to the user's name.
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
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: `Here is ${result.value.login}'s avatar!`,
          imageUrl: result.value.avatar_url
        });
        this.setState({
          userImg: result.value.avatar_url
        });
        console.log(this.state.userImg);

        // user select their color:
        /* inputOptions can be an object or Promise */
        const inputOptions = new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              '#ff0000': 'Red',
              '#00ff00': 'Green',
              '#0000ff': 'Blue',
              '#000000': 'Black',
            })
          }, 1000)
        })

        const { value: color } = Swal.fire({
          title: 'Select color',
          input: 'radio',
          inputOptions: inputOptions,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to choose something!'
            }
          }
        })

        if (color) {
          Swal.fire({ html: `You selected: ${color}` })
        }


        // retrieve user IP Address
        const ipAPI = "//api.ipify.org?format=json";
        Swal.queue([
          {
            title: "Your public IP",
            confirmButtonText: "Show my public IP",
            text: "Your public IP will be received via AJAX request",
            showLoaderOnConfirm: true,
            preConfirm: () => {
              return fetch(ipAPI)
                .then(response => response.json())
                .then(data => {
                  Swal.insertQueueStep(data.ip);
                  this.setState({
                    userId: data.ip
                  });
                })
                .catch(() => {
                  Swal.insertQueueStep({
                    icon: "error",
                    title: "Unable to get your public IP"
                  });
                });
            }
          }
        ]);
      }
      userName = result.value.login;

      this.setState({
        userName: userName
      });
    });

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
    const dbRef = firebase.database().ref();
    dbRef.push({
      userInput,
      userName: this.state.userName,
      userId: this.state.userId,
      userImg: this.state.userImg
    });
  };
  1;

  remove = key => {
    // event.preventDefault();
    const dbRef = firebase.database().ref();
    console.log("dbRef", dbRef.child(key));
    console.log("key", key);
    dbRef.child(key).remove();
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
                  <img
                    src={message.message.userImg}
                    alt={message.message.userName}
                  />
                  <button
                    className="cross"
                    onClick={() => {
                      this.remove(message.key);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>{" "}
                  <p>
                    <span className="blueFont">{message.message.userName}</span>
                    : {message.message.userInput}
                  </p>
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
