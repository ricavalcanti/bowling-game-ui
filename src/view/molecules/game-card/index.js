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

const GameCard = props => {
  const { game } = props;
  const classes = useStyles();
  const history = useHistory();

  const isRunning = game?.status && !constants.game_status_enum[game.status];

  const handleContinueGameButton = event => {
    event.preventDefault();
    history.push(`/game/${game?.id}`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{`Game ${game?.id}`}</Typography>
        <Typography>{`Status: ${game?.status}`}</Typography>
        <Typography>{`Frames played: ${game?.frames?.length}`}</Typography>
      </CardContent>
      {isRunning && (
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleContinueGameButton}
          >
            {constants.labels.continue}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.objectOf({
    id: PropTypes.number,
    total_score: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    status: PropTypes.number,
    frames: PropTypes.arrayOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default GameCard;
