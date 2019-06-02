import React from "react";
import { Formik } from "formik";
import M from "materialize-css";
import Delete from "@material-ui/icons/DeleteOutlined";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    M.AutoInit();
  }

  changePageA = () => {
    this.props.changePage(1);
  };

  onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    this.props.addUser(values);
    this.props.changePage(1);
  };

  validate = values => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.lastname) {
      errors.lastname = "Required";
    }
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.email || !isNaN(values.email)) {
      errors.email = "Required";
    }
    return errors;
  };

  render() {
    return (
      <div className="container">
        <h5 className="center-align">Agregar Usuario</h5>
        <div>
          <a
            onClick={this.changePageA}
            className="btn-floating ButtonColorDelete"
          >
            <i className="material-icons">{<Delete />}</i>
          </a>
        </div>

        <Formik
          initialValues={{
            name: "",
            lastname: "",
            username: "",
            password: "",
            email: ""
          }}
          validate={this.validate}
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
            <div className="row">
              <form
                onSubmit={handleSubmit}
                className="col s12"
                validate="false"
              >
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      className="validate"
                    />
                    <label htmlFor="name">Nombre Completo</label>
                    {errors.name && touched.name && errors.name}
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      value={values.lastName}
                      className="validate"
                    />
                    <label htmlFor="lastname">Apellidos</label>
                    {errors.lastname && touched.lastname && errors.lastname}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="username"
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      className="validate"
                    />
                    <label htmlFor="username">Nombre Usuario</label>
                    {errors.username && touched.username && errors.username}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      className="validate"
                    />
                    <label htmlFor="password">Contraseña</label>
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className="validate"
                    />
                    <label
                      htmlFor="email"
                      data-error="wrong"
                      data-success="right"
                    >
                      Correo Eletrónico
                    </label>
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <button
                  className="btn waves-effect waves-light ButtonColor"
                  type="submit"
                  name="action"
                  disabled={isSubmitting}
                >
                  Enviar
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default UserForm;
