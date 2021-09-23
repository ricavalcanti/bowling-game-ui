import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import useStyles from './styles';

const ElevateAppBar = props => {
  const { title } = props;
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.elevateAppBar}>
        <Toolbar className={classes.elevateAppBar}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

ElevateAppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ElevateAppBar;
