// a couple of functions from the React library
import React, { Component } from 'react';

// import components
import Header from './Components/Header';
import Main from './Components/Main';
import Aside from './Components/Aside';
import Footer from './Components/Footer';

// import firebase
import firebase from './firebase';

// CSS for the `App` component
import './App.scss';

class App extends Component{
  render(){
      return (
        <div className="App">
          <header>
            <Header />
          </header>

          <section className="mainGrid">
            <aside>
              <Aside />
            </aside>

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