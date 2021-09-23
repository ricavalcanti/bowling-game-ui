import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InitialPage from './view/pages/initial-page';
import theme from './theme';

const App = () => (
  <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={InitialPage} />
          <Route default component={InitialPage} />
        </Switch>
      </ThemeProvider>
    </div>
  </Router>
);

export default App;
