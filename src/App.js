import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/header/header.js'
import Announcement from './components/announcement.js'
import Select from './components/header/select.js'

const API_KEY = "CHsylrKUZMxyd2OQ9CaynPWRUnu2QblXaB8cHdta";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data : []}
  }

    gettingAnnounce = async (event) => {
        event.preventDefault();
        const carId = event.target.elements;
        const api_url = await
        fetch(`https://developers.ria.com/auto/categories/?api_key=${API_KEY}`);
        const data = await api_url.json();
        this.setState({data})
        console.log(api_url)
    }

  render() {
    console.log(this.state.data)
    return (
      <div className="container">
        <Head />
        <select >{this.state.data.map(el => <option key={el.value}>{el.name} </option> )}</select>
        <Announcement announceMethod={this.gettingAnnounce}/>
      </div>
    );
  }
}
export default App;

