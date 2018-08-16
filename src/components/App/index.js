import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MainHeader from '../MainHeader';
import Column from '../Column';

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
          
          <Column></Column>
          <Column></Column>
          <Column></Column>
        </div>
      </div>
    );
  };
};

export default App;