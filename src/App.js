import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// API Key
//this.apiKey
class App extends React.Component {
  pageSize=6;
  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return( 
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='home' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route exact path='/general' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>  
    );
  }
}

export default App;