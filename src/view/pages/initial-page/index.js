import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getAllGames, createGame } from '../../../api/resources/games';
import GameCard from '../../molecules/game-card';
import constants from './constants';

const InitialPage = props => {
  const { history } = props;
  const [games, setGames] = React.useState([]);

  const loadGames = async () => {
    setGames(await getAllGames());
  };

  useEffect(() => {
    loadGames();
  }, []);

  const handleStartNewButton = async event => {
    event.preventDefault();
    const newGame = await createGame();
    if (newGame?.id) history.push(`/game/${newGame.id}`);
  };

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
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={handleStartNewButton}
          >
            {constants.labels.start_new}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

InitialPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default InitialPage;
