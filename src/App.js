import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';
// execute jsx before the return 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
