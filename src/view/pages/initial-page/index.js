import React, { useEffect } from 'react';
import { getAllGames } from '../../../api/resources/games';

const InitialPage = () => {
  const [games, setGames] = React.useState([]);

  const loadGames = async () => {
    setGames(await getAllGames());
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div>
      <h1>Hello world from initial</h1>
      {games?.map(game => (
        <h1>{game.id}</h1>
      ))}
    </div>
  );
};

export default InitialPage;
