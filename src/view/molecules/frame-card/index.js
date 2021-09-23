import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const FrameCard = props => {
  const { frame } = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{`Frame ${frame?.frame_number}`}</Typography>
        <Typography>{`First ball: ${
          frame?.throws[0]?.knocked_pins || ''
        }`}</Typography>
        <Typography>{`Second ball: ${
          frame?.throws[1]?.knocked_pins || ''
        }`}</Typography>
        <Typography>{`Score: ${frame?.frame_score}`}</Typography>
        <Typography>{`Type: ${frame?.frame_type}`}</Typography>
      </CardContent>
    </Card>
  );
};

FrameCard.defaultProps = {
  frame: {
    id: null,
    frame_score: null,
    waiting_how_much_throws: null,
    frame_number: null,
    created_at: null,
    updated_at: null,
    game_id: null,
    frame_type: null,
    throws: [],
  },
};

FrameCard.propTypes = {
  frame: PropTypes.objectOf({
    id: PropTypes.number,
    frame_score: PropTypes.number,
    waiting_how_much_throws: PropTypes.number,
    frame_number: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    game_id: PropTypes.number,
    frame_type: PropTypes.number,
    throws: PropTypes.arrayOf({
      id: PropTypes.number,
      knocked_pins: PropTypes.number,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
    }),
  }),
};

export default FrameCard;
