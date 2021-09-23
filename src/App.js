import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InitialPage from './view/pages/initial-page';
import RunningGamePage from './view/pages/running-game-page';
import theme from './theme';

const App = () => (
  <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={InitialPage} />
          <Route exact path="/game/:id" component={RunningGamePage} />
          <Route default component={InitialPage} />
        </Switch>
      </ThemeProvider>
    </div>
  </Router>
);

export default App;
