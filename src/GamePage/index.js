import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const GamePage = props => {
  const gameSlug = useParams().gameSlug;
  const [loadedGame, setLoadedGame] = useState();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://rawg.io/api/games/${gameSlug}`
        );
        console.log(response.data);
        setLoadedGame(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGames();
  }, [gameSlug]);

  return (
    <div>
      {loadedGame && (
        <div className='game-content'>
          <img
            src={loadedGame.background_image}
            className='rounded'
            alt='Cinque Terre'
            style={{ width: '40rem', height: '30rem' }}
          />
          <div> Metacritic Score: {loadedGame.metacritic} </div>
          <div>
            {' '}
            Description: <p>{loadedGame.description_raw}</p>{' '}
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
