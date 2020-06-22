import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const LandingPage = () => {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className='form-inline main-wrap'>
      <input
        type='text'
        className='form-control'
        value={enteredText}
        required
        onChange={textChangeHandler}
      />
      <Link to={`/search/${enteredText}`}>
        <button
          className='btn btn-success'
          style={{ margin: '1rem' }}
          type='submit'
        >
          Search
        </button>
      </Link>
    </form>
  );
};

export default LandingPage;
