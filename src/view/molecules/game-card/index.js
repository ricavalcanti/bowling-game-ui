import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import constants from './constants';
import useStyles from './styles';
import { deleteGame } from '../../../api/resources/games';

const GameCard = props => {
  const { game, onDelete } = props;
  const classes = useStyles();
  const history = useHistory();

  const isRunning = game?.status && !constants.game_status_enum[game.status];

  const handleContinueGameButton = event => {
    event.preventDefault();
    history.push(`/game/${game?.id}`);
  };

  const handleDeleteGameButton = async event => {
    event.preventDefault();
    const res = await deleteGame(game.id);
    if (res) onDelete();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{`Game ${game?.id}`}</Typography>
        <Typography>{`Status: ${game?.status}`}</Typography>
        <Typography>{`Frames played: ${game?.frames?.length}`}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          variant="outlined"
          onClick={handleDeleteGameButton}
          className={classes.deleteBtton}
        >
          {constants.labels.delete}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleContinueGameButton}
          disabled={!isRunning}
        >
          {isRunning ? constants.labels.continue : 'Game finished'}
        </Button>
      </CardActions>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    total_score: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    status: PropTypes.string,
    frames: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      })
    ),
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GameCard;
