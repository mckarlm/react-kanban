import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MainHeader from '../MainHeader'

// import components

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  };

  //
  componentDidMount() {
    axios.get('/api')
      .then(response => {
        this.setState({ cards: response.data });
      })
      .catch(err => { console.log(err) });
  };

  render() {
    return (
      <div className="absolute-container">
        <MainHeader />
        <div className="all-columns-container">
          <div className="column-container">
            <div className="column-header"></div>
            <div className="card-container"></div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
