import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getAllGames } from '../../../api/resources/games';
import GameCard from '../../molecules/game-card';
import useStyles from './styles';

const InitialPage = () => {
  const [games, setGames] = React.useState([]);
  const classes = useStyles();

  const loadGames = async () => {
    setGames(await getAllGames());
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div>
      <Grid container spacing={2} justify="center" direction="column">
        {games?.map(game => (
          <Grid key={game.id} item xs={12} className={classes.gridItem}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InitialPage;
