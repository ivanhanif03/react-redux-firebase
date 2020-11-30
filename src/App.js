import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
