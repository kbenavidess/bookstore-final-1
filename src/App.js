import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./layout/nav/Nav";
import Home from "./component/lobby/Home";
import UserList from "./component/user/UserList";
import BookList from "./component/book/BookList";
import Login from "./component/security/Login";
import Logout from "./component/security/Logout";
import "materialize-css/dist/css/materialize.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: false
    };
  }
  changeSession = value => {
    this.setState({
      session: value
    });
  };

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.state.session === true ? ( //this.props.isLogged
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
    console.log("state App " + this.props.isLogged);
    return this.state.session ? (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/user" component={UserList} />
          <PrivateRoute path="/book" component={BookList} />
          <Route
            path="/logout"
            component={() => <Logout changeSession={this.changeSession} />}
          />
        </Switch>
      </div>
    ) : (
      <div className="App">
        <Login changeSession={this.changeSession} />
      </div>
    );
  }
}

export default App;
