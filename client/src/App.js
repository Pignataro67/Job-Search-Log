import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TasksIndex from './containers/tasks_index';
import TasksNew from './containers/tasks_new';
import NavBar from './components/navbar';
import TasksShow from './containers/tasks_show';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Hello extends Component {
  render() {return <div>Hello!</div>}
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="App-header">
          <h1 className="App-title">JobSearch Task Tracker</h1>
        </header>
        <Router>
          <div className="routes">
            <NavBar />
            <Switch>
              <Route exact path="/tasks/new" component={ TasksNew } />
              <Route path="/tasks/:id" component={ TasksShow } />
              <Route exact path="/" component={ TasksIndex } />
            </Switch>  
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
