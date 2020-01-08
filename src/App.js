import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Login from "./pages/auth/Login";
import Meetings from "./pages/meetings/containers";
import NewMeeting from "./pages/meetings/containers/new";
import Configuration from "./pages/configuration/containers/configuration";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AppLayout from "./layout/app_layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {!this.props.user ? (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgot_password" exact component={ForgotPassword} />
            <Route path="*" component={Login} />
          </Switch>
        ) : (
          <AppLayout>
            <Switch>
              <Route path="/" exact />
              <Route path="/configuration" exact component={Configuration} />
              <Route path="/meetings" exact component={Meetings} />
              <Route path="/meetings/new" exact component={NewMeeting} />
            </Switch>
          </AppLayout>
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.UserReducer.user
});

export default connect(mapStateToProps)(App);
