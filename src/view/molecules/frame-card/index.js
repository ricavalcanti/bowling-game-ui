import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import constants from './constants';

const FrameCard = props => {
  const { frame } = props;

  const getSecondBall = () =>
    frame?.throws[1]?.knocked_pins && frame?.frame_type !== 'strike'
      ? frame?.throws[1]?.knocked_pins
      : '';

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{`${constants.labels.frame} ${frame?.frame_number}`}</Typography>
        <Typography>{`${constants.labels.first_ball}: ${
          frame?.throws[0]?.knocked_pins || ''
        }`}</Typography>
        <Typography>{`${
          constants.labels.second_ball
        }: ${getSecondBall()}`}</Typography>
        <Typography>{`${constants.labels.score}: ${frame?.frame_score}`}</Typography>
        <Typography>{`${constants.labels.type}: ${frame?.frame_type}`}</Typography>
      </CardContent>
    </Card>
  );
};

FrameCard.propTypes = {
  frame: PropTypes.shape({
    id: PropTypes.number,
    frame_score: PropTypes.number,
    waiting_how_much_throws: PropTypes.number,
    frame_number: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    game_id: PropTypes.number,
    frame_type: PropTypes.string,
    throws: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        knocked_pins: PropTypes.number,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default FrameCard;
