import React from 'react';

import './styles.css';

const GameItem = props => {
  return (
    <div className='main-game-item'>
      <img
        src={props.image}
        className='img-fluid'
        alt='hell'
        style={{ width: '20rem', height: '15rem' }}
      />
      <mark>{props.name}</mark>
    </div>
  );
};

export default GameItem;
