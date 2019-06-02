import React from "react";
import { Formik } from "formik";
import M from "materialize-css";
import Delete from "@material-ui/icons/DeleteOutlined";

export default class BookForm extends React.Component {
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
    this.props.addBook(values);
    this.props.changePage(1);
  };

  validate = values => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.author) {
      errors.author = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    return errors;
  };

  render() {
    return (
      <div className="container">
        <h5 className="center-align">Agregar Libro</h5>
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
            author: "",
            description: ""
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
                  <div className="input-field col s12">
                    <i className="material-icons prefix">book</i>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      className="validate"
                    />
                    <label htmlFor="name">Nombre</label>
                    {errors.name && touched.name && errors.name}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="author"
                      type="text"
                      name="author"
                      onChange={handleChange}
                      value={values.author}
                      className="validate"
                    />
                    <label htmlFor="author">Autor</label>
                    {errors.author && touched.author && errors.author}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea
                      id="description"
                      name="description"
                      onChange={handleChange}
                      value={values.description}
                      className="materialize-textarea validate"
                    />
                    <label htmlFor="description">Descripción</label>
                    {errors.description &&
                      touched.description &&
                      errors.description}
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
