import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Nav from './components/Nav';
import "./style/Common.css";
import Page from "./components/Page";
import data from "./components/Source"

 var  TabList = [{
   Name:"Home"
 }]
 var Iframes = [
    {
      "NavId":"bing",
      "Url":"https://www.bing.com"
    }
 ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Page  ItemList={data} TabList={TabList} Iframes={Iframes}></Page>
      </div>
    );
  }
}

export default App;

