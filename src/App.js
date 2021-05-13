import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/App.css';
import Home from './components/Home';
import ListCompany from './components/ListCompany';

function App() {

  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
         <Route path="/" component={ListCompany} />
      </Switch>
    </Router>
  );
}

export default App;
