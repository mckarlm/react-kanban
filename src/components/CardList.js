import React from 'react';
import PropTypes from 'prop-types';
import CardListItem from './CardListItem';

const CardList = props => {
  return (
    <ul>
      <ul>Testing Card List</ul>
      {
        props.cards.map((card, idx) => {
          return <CardListItem
            key={idx}
            title={card.title}
            body={card.body}
            priority_id={card.priority_id}
            status_id={card.status_id}
            created_by={card.created_by}
            assigned_to={card.assigned_to}
          />
        })
      }
    </ul>
  )
}

export default CardList;