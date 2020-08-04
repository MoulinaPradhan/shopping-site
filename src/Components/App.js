import React from "react";
import { Head, Home, NavLinks, login,Signup } from "./";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

{
  /*const login = () => <div></div>;*/
}
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
            <Route path="/login" component={login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
