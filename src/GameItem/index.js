import React from 'react';

import './styles.css';

const GameItem = props => {
  return (
    <div className='main-game-item'>
      <img
        src={props.image}
        className='img-thumbnail'
        alt='hell'
        style={{ width: '20rem', height: '15rem' }}
      />
      {props.name}
    </div>
  );
};

export default GameItem;
