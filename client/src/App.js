import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import TasksIndex from './containers/tasks_index';
import TasksForm from './containers/tasks_form';
import NavBar from './components/navbar';
import Header from './components/header';
import TasksShow from './containers/tasks_show';
import HomeNavBar from './components/home_nav_bar';

class App extends Component {
  showHeader = () => {
    return window.location.pathname !== '/'
  }

  render() {
    return (
      <div className="app">
        <header className="App-header">
          <h1 className="App-title">Job Search Task Tracker</h1>
        </header>
        <Router>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={HomeNavBar} />
              <Route path="/" component={NavBar} />
            </Switch>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tasks/new" component={ TasksForm } />
              <Route path="/tasks/:id" component={ TasksShow } />
              <Route exact path="/tasks" component={ TasksIndex } />
              <Route exact path="/" component={Home} />
            </Switch>  
          </div>
        </Router>
      </div>
    );
  }
}

export default App;