import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Nav from './components/Nav';
import "./style/Common.css";
import Page from "./components/Page";
import data from "./components/Source"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Page  ItemList={data}></Page>
      </div>
    );
  }
}

export default App;

