import { createMuiTheme } from '@material-ui/core';

// Theme created with material ui tool
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=3E2723&secondary.color=FF8A65

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6a4f4b',
      main: '#3e2723',
      dark: '#1b0000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffbb93',
      main: '#ff8a65',
      dark: '#c75b39',
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
