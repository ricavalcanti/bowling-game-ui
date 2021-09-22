import React from 'react';
import ThemeProvider from '@material-ui/core/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import InitialPage from './view/pages/initial-page';
import theme from './theme';

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InitialPage />
    </ThemeProvider>
  </div>
);

export default App;
