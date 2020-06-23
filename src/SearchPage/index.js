import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import './styles.css';
import GameItem from '../GameItem';

const LandingPage = props => {
  const query = useParams().query;
  const [loadedGames, setLoadedGames] = useState();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?page_size=8&search=${query}`
        );
        console.log(response.data.results);
        setLoadedGames(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGames();
  }, [query]);

  return (
    <div className='main-wrap-search'>
      {loadedGames &&
        loadedGames.map(game => (
          <Link to={`/${game.slug}`} style={{ textDecoration: 'none' }}>
            <GameItem
              key={game.slug}
              slug={game.slug}
              name={game.name}
              image={game.background_image}
            />
          </Link>
        ))}
    </div>
  );
};

export default LandingPage;
