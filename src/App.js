import React from 'react';
import ThemeProvider from '@material-ui/core/styles/ThemeProvider';
import InitialPage from './view/pages/initial-page';
import theme from './theme';

const App = () => (
  <div className="App">
    <ThemeProvider>
      <InitialPage theme={theme} />
    </ThemeProvider>
  </div>
);

export default App;
