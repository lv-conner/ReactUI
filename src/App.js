import React, { Component } from 'react';
import './style/App.css';
import Nav from './components/Nav';
import "./style/Common.css";
import Page from "./components/Page";
import {Source} from "./components/Source"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Page data={Source}></Page>
      </div>
    );
  }
}

export default App;

