import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getOneGame } from '../../../api/resources/games';
import FrameCard from '../../molecules/frame-card';
import useStyles from './style';
import constants from './constants';

const RunningGamePage = props => {
  const { match } = props;
  const [game, setGame] = React.useState({});
  const classes = useStyles();

  const loadGame = async () => {
    setGame(await getOneGame(match?.params?.id));
  };

  useEffect(() => {
    loadGame();
  }, []);

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
        <Button size="large" variant="contained" color="secondary">
          {constants.labels.throw_ball}
        </Button>
      </Grid>
    </Grid>
  );
};

RunningGamePage.propTypes = {
  match: PropTypes.objectOf({ id: PropTypes.number }).isRequired,
};

export default RunningGamePage;
