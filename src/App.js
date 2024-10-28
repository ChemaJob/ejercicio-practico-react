import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import FormComponent from './components/FormComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginComponent} />
        <Route path="/form" component={FormComponent} />
      </Switch>
    </Router>
  );
};

export default App;
