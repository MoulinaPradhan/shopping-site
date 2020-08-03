import React from "react";
import { Head, Home, NavLinks, Slides, Card } from "./";
import * as firebase from "firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = () => <div>Login</div>;
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Head />
          <NavLinks />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} />;
              }}
            />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
