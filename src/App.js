import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

// API Key
// 5d02f44f1aa148b69cd22421eafa9214

class App extends React.Component {
  render() {
    return( 
      <div>
        <Navbar/>
        <News/>
      </div>  
    );
  }
}

export default App;