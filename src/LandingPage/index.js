import React, { useState } from 'react';

import './styles.css';

const LandingPage = props => {
  const [enteredText, setEnteredText] = useState('');

  const searchGame = event => {
    event.preventDefault();
    // const newGoal = {
    //   id: Math.random().toString(),
    //   text: enteredText,
    // };
    // props.onGoalAdd(newGoal);
    setEnteredText('');
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className='form-inline main-wrap' onSubmit={searchGame}>
      <input
        type='text'
        className='form-control'
        value={enteredText}
        required
        onChange={textChangeHandler}
      />
      <button
        className='btn btn-success'
        style={{ margin: '1rem' }}
        type='submit'
      >
        Search
      </button>
    </form>
  );
};

export default LandingPage;
