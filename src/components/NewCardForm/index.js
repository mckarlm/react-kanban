// ===== Card  index ===== //

import React from 'react';
import './NewCardForm.css';

const NewCardForm = props => {
  const {
    name,
    body,
    priority,
    status,
    created_by,
    assigned_to
  } = props

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
      <button onClick={props.clickHandler} style={styles}>{props.label || 'Click Me'}</button>
    </div>
  )
}

export default NewCardForm;