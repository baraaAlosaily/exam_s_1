
import './App.css';
import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './Components/Header'
import Main from './Components/Main'
import Favorite from './Components/Favorite'

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/favorite">
              <Favorite />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
