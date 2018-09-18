import React, { Component } from 'react';
import './style/App.css';
import Nav from './components/Nav';
import "./style/Common.css";
import Page from "./components/Page";
import {Source} from "./components/Source"
//document.apiUrl = "http://127.0.0.1:13130/";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Page apiUrl ={document.apiUrl || "/api/menu"} ></Page>
      </div>
    );
  }
}

export default App;

