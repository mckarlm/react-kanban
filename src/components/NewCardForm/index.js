// ===== NewCardForm index ===== //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addCard } from '../../actions';
import './NewCardForm.css';

class NewCardForm extends Component {
  // const {
  //   name,
  //   body,
  //   priority,
  //   status,
  //   created_by,
  //   assigned_to
  // } = props
  constructor(props) {
    super(props);

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      createdByInput: '',
      assignedToInput: ''
    }
    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard(event) {
    const cardData = {};
    cardData.title = this.state.titleInput;
    cardData.body = this.state.bodyInput;
    cardData.priority = this.state.priorityInput;
    cardData.status = this.state.statusInput;
    cardData.createdBy = this.state.createdByInput;
    cardData.assignedTo = this.state.assignedToInput;

    this.props.addCard(cardData);
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      createdByInput: '',
      assignedToInput: ''
    });
  }

  render() {
    return (
      <div className="">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
        />
        <label htmlFor="body">body</label>
        <input
          type="text"
          name="body"
          id="body"
        />
        <label htmlFor="priority">priority</label>
        <input
          type="text"
          name="priority"
          id="priority"
        />
        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          id="status"
        />
        <label htmlFor="created_by">created by</label>
        <input
          type="text"
          name="created_by"
          id="created_by"
        />
        <button onClick={this.addNewCard} label='Add Card'>Click Me</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

export default NewCardForm;