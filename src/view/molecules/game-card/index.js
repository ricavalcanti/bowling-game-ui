import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import constants from './constants';
// import useStyles from './styles';

const GameCard = props => {
  const { game } = props;
  // const classes = useStyles();

  console.log({ game });

  const isRunning = game?.status && !constants.game_status_enum[game.status];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{`Game ${game?.id}`}</Typography>
        <Typography color="text.secondary">{`Status: ${game?.status}`}</Typography>
        <Typography color="text.secondary">{`Frames played: ${game?.frames?.length}`}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" disabled>
          Continue game
        </Button>
      </CardActions>
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
