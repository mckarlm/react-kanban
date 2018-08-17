// ===== App index ===== //

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import { loadCards } from '../../actions';
import './App.css';
import MainHeader from '../MainHeader';
import Column from '../Column';
import CardList from '../CardList';
import NewCardForm from '../NewCardForm';

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

  componentDidMount() {
    this.props.loadCards();
  };

// header body form
  render() {
    return (
      <div className="absolute-container">
        <MainHeader />
        <NewCardForm />
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

const mapStateToProps = state => {
  return {
    cards: state.cardList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;