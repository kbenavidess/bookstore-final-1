import React from "react";
import Add from "@material-ui/icons/Add";
import "./UserList.css";
import UserForm from "./UserForm";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      userList: [
        {
          name: "Kevin",
          lastname: "Benavides",
          username: "kbenavidess",
          password: "lkajsl45454kjfief87979797kjgsfgfgimd5",
          email: "kevin.benavides@live.com"
        },
        {
          name: "Laura",
          lastname: "Naranjo",
          username: "laura.naranjo",
          password: "khkhotkog95986565454+54",
          email: "laura.naranjo@gmail.com"
        }
      ]
    };
  }

  changePageB = newPage => {
    this.setState({
      page: newPage
    });
  };

  /*componentDidMount() {
    this.setState({
      userList: userList
    });
  }*/

  addUser = newUser => {
    this.setState({
      userList: [...this.state.userList, newUser]
    });
  };

  render() {
    let userList = this.state.userList.map((obj, index) => {
      return (
        <tr key={index}>
          <td>{obj.name}</td>
          <td>{obj.lastname}</td>
          <td>{obj.username}</td>
          <td>{obj.email}</td>
        </tr>
      );
    });
    return this.state.page === 1 ? (
      <div className="container">
        <div className="row" />
        <h5 className="center-align">Lista de Usuarios</h5>
        <div>
          <a
            onClick={() => this.setState({ page: 2 })}
            className="btn-floating cyan pulse ButtonColor"
          >
            <i className="material-icons">{<Add />}</i>
          </a>
        </div>
        <table className="highlight centered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Nombre Usuario</th>
              <th>Correo Electrónico</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
      </div>
    ) : (
      <UserForm addUser={this.addUser} changePage={this.changePageB} />
    );
  }
}
