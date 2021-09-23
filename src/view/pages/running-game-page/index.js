import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getOneGame } from '../../../api/resources/games';
import { createThrow } from '../../../api/resources/throws';
import FrameCard from '../../molecules/frame-card';
import useStyles from './style';
import constants from './constants';

const RunningGamePage = props => {
  const { match } = props;
  const [game, setGame] = React.useState({});
  const [switchRefresh, setSwitchRefresh] = React.useState(false);
  const classes = useStyles();

  const loadGame = async () => {
    setGame(await getOneGame(match?.params?.id));
  };

  useEffect(() => {
    loadGame();
  }, [switchRefresh]);

  const getMaxPins = () => {
    const gameFrames = game?.frames;
    const lastFrame = gameFrames && gameFrames[gameFrames.length - 1];
    const isFrameEmpty = lastFrame.throws.length === 0;
    const offset = lastFrame.frame_score;

    if (isFrameEmpty) return constants.max_pins;

    return constants.max_pins - offset;
  };

  const getRandomThrow = () => Math.floor(Math.random() * getMaxPins() + 1);

  const handleThrowBall = async event => {
    event.preventDefault();
    const knockedPins = getRandomThrow();
    const response = await createThrow(knockedPins, game?.id);
    if (response) setSwitchRefresh(!switchRefresh);
  };

  return (
    <Grid container direction="column" spacing={10}>
      <Grid item>
        <Grid container spacing={2} direction="row">
          {game?.frames?.map(frame => (
            <Grid key={frame.id} item xs={3}>
              <FrameCard frame={frame} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item className={classes.throwButton}>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={handleThrowBall}
        >
          {constants.labels.throw_ball}
        </Button>
      </Grid>
    </Grid>
  );
};

RunningGamePage.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};

export default RunningGamePage;
