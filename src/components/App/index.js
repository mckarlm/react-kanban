import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import components

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  };

  componentDidMount() {
    axios.get('/api')
      .then(response => {
        this.setState({ cards: response.data });
      })
      .catch(err => { console.log(err) });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">wiggity</h1>
        </header>
        <h3>woo</h3>
      </div>
    );
  };
};

export default App;
