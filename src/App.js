import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

// API Key
//apiKey
const App =()=> {
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  const [country, setSelectedValue] = useState('in');

  

  return( 
    <div>
      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
    />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} key='home' pageSize={pageSize} country={country} category='general' />}></Route>
          <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={pageSize} country={country} category='business' />}></Route>
          <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={pageSize} country={country} category='entertainment' />}></Route>
          <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key='health' pageSize={pageSize} country={country} category='health' />}></Route>
          <Route exact path='/general' element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} country={country} category='general' />}></Route>
          <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={pageSize} country={country} category='science' />}></Route>
          <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={pageSize} country={country} category='sports' />}></Route>
          <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={pageSize} country={country} category='technology' />}></Route>
        </Routes>
      </Router>
    </div>  
  );
}

export default App;