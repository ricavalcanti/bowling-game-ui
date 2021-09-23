import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getAllGames } from '../../../api/resources/games';
import GameCard from '../../molecules/game-card';
import constants from './constants';

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
      <Grid container justify="center" direction="column">
        <Grid item>
          <Grid container spacing={2} justify="center" direction="column">
            {games?.map(game => (
              <Grid key={game.id} item xs={12}>
                <GameCard game={game} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Button size="large" variant="contained" color="secondary">
            {constants.labels.start_new}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InitialPage;
