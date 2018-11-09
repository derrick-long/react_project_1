import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';
// execute jsx before the return 
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header branding="Contact Manger"/>
        
        <Contact name="John Doe" 
        email="jdoe@gmail.com" phone="555-555-5555"
        />
      
        <Contact name = "Karen Smith"
        email = "ksmith@gmail.com"
        phone = "444-444-4444" 
        />
       </div>
    );
  }
}

export default App;
