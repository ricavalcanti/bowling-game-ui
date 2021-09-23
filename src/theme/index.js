import { createMuiTheme } from '@material-ui/core';

// Theme created with material ui tool
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=3E2723&secondary.color=FF8A65

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#fffd61',
      main: '#ffca28',
      dark: '#c79a00',
      contrastText: '#000000',
    },
    background: {
      default: '#283593',
    },
    text: {
      primary: '#000000',
    },
  },
});

export default theme;
