import React from "react";
import "./Login.css";
import { Formik } from "formik";

import { history } from "../../Store";
import { logIn } from "../../reducers/auth";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    setTimeout(() => {
      if (values.username === "kevin.benavides" && values.password === "1234") {
        this.props.changeSession(true);
        history.push("/home");
      } else {
        alert("Usuario o clave incorrecta");
      }
    }, 1000);
    /*this.props.logIn(values);
    setTimeout(() => {
      history.push("/home");
    }, 1000);*/
  };

  render() {
    return (
      <div id="login-page" className="row">
        <div className="row" />
        <div className="row" />
        <div className="row">
          <h5 className="center-align">Login BookStore</h5>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={this.onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <div className="col s12 z-depth-6 card-panel">
              <form
                onSubmit={handleSubmit}
                className="login-form col s12"
                validate="false"
              >
                <div className="row" />
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      className="validate"
                    />
                    <label htmlFor="username">Nombre usuario</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">lock_outline</i>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      className="validate"
                    />
                    <label htmlFor="password">Contraseña</label>
                  </div>
                </div>
                <button
                  className="btn waves-effect waves-light col s12 ButtonColor"
                  type="submit"
                  name="action"
                >
                  Login
                </button>
                <div className="row" />
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    loggedUser: state.auth.loggedUser,
    logginError: state.auth.logginError
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logIn
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
