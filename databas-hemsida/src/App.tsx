// import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Underside from './components/Underside';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path = "/" component = {Main} />
      <Route exact path = "/underside" component={Underside} />
    </div>
  );
}

export default App;
