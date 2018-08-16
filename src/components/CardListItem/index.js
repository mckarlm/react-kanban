// ===== CardList index ===== //

import React from 'react';
import PropTypes from 'prop-types';
import './CardListItem.css'

const CardListItem = props => {
  return (
    <li>
      <h5>{props.title}</h5>
      <h5>{props.body}</h5>
      <h5>{props.priority_id}</h5>
      <h5>{props.status_id}</h5>
      <h5>{props.created_by}</h5>
      <h5>{props.assigned_to}</h5>
    </li>
  )
}

export default CardListItem;