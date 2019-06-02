import React from "react";
import { history } from "../../Store";

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (confirm("Desea cerrar la sesión")) {
      this.props.changeSession(false);
      history.push("/login");
    } else {
      history.push("/home");
    }
  }

  render() {
    return <div />;
  }
}
