import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import { loadCards } from '../../actions';
import './App.css';
import MainHeader from '../MainHeader';
import Column from '../Column';
import CardList from '../CardList';

// import components

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { title: 'wiggity', body: 'woo', priority_id: 1, status_id: 1, created_by: 2, assigned_to: 1}
      ]
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
          <CardList cards={this.props.cards}/>
          <Column></Column>
          <Column></Column>
          <Column></Column>
        </div>
      </div>
    );
  };
};

// const takeAction = state => {}

// export default connect(takeAction, dispatcher)(App);
export default App;