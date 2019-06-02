import React from "react";
import "./Nav.css";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasket from "@material-ui/icons/Book";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="NavColor">
          <div className="nav-wrapper">
            <ul className="right">
              <li>
                <a className="waves-effect waves-light" href="#/home">
                  <i className="material-icons left">{<HomeIcon />}</i>
                  Home
                </a>
              </li>
              <li>
                <a className="waves-effect waves-light" href="#/user">
                  <i className="material-icons left">{<PersonPinIcon />}</i>User
                </a>
              </li>
              <li>
                <a className="waves-effect waves-light" href="#/book">
                  <i className="material-icons left">{<ShoppingBasket />}</i>
                  Book
                </a>
              </li>
              <li>
                <a className="waves-effect waves-light" href="#/logout">
                  <i className="material-icons left"> exit_to_app</i>Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
