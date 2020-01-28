import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TasksContainer from './containers/tasks_container';
import TasksNew from './containers/tasks_new';

class Hello extends Component {
  render() {return <div>Hello!</div>}
}

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/tasks/new" component={ TasksNew } />
            <Route path="/" component={ TasksContainer } />
          </Switch>  
        </div>
      </Router>
    );
  }
}

export default App;
