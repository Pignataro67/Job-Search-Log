import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Hello extends Component {
  render() {return <div>Hello!</div>}
}

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={ Hello } />
        </div>
      </Router>
    );
  }
}

export default App;
