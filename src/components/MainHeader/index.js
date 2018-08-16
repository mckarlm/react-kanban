// ===== MainHeader index ===== //

import React from 'react';
import './MainHeader.css';

const MainHeader = props => {

  return (
    <header className="main-header">
      <h3 className="main-title">Subterranean Animism</h3>
      <h3 className="new-task-button"> New Task +</h3>
    </header>
  );
}

export default MainHeader;