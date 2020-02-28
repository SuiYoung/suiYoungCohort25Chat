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

class App extends Component{
  constructor(){
    super();
    this.state={
      asideOpen: true,
      messages: [],
      userInput: ''
    }
  }
  
  // function to slide the aside in and out.
  asideToggleClickHandler = () => {
    this.setState((prevState) => {
      return {asideOpen: !prevState.asideOpen};
    })
  }
  
  
  render(){
    
    let asideDrawer;
    
    if (this.state.asideOpen) {
      asideDrawer = <Aside />;
    }

    return (
      <div className="App">
        <Helmet/>
        <InstructionButton click={this.asideToggleClickHandler}/>
        <header>
          <Header />
        </header>
        {asideDrawer}

        <section className="mainGrid">
          <main>
            <Main />
          </main>
        </section>

        {/* may not need footer */}
        <Footer /> 
      </div>
    );
  }
}

export default App;