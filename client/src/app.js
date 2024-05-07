import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProjectList from './components/Project/ProjectList';
import NewProject from './components/Project/NewProject';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/new" component={NewProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
