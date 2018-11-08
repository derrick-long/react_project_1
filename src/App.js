import React, { Component } from 'react';
import Contact from './components/Contact';

import './App.css';
// execute jsx before the return 
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> The App Component </h1> 
       <Contact />
      </div>
    );
  }
}

export default App;
