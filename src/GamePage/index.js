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
    <div className='main-bg'>
      {loadedGame && (
        <div className='game-content'>
          <img
            src={loadedGame.background_image}
            className='rounded'
            alt={loadedGame.name}
          />
          <div className='meta-score'>
            {' '}
            Metacritic Score:{' '}
            {loadedGame.metacritic
              ? loadedGame.metacritic
              : 'Score does not exist'}{' '}
          </div>
          <div className='desc'>
            {' '}
            <h2>Description:</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: loadedGame.description,
              }}
            ></div>{' '}
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
