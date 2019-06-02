import React from "react";
import "./BookList.css";
import Add from "@material-ui/icons/Add";
import BookForm from "./BookForm";

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      bookList: [
        {
          name: "La ladrona de libros",
          author: "Markus Zusak",
          description:
            "En la Alemania de la era nazi, el Ángel de la Muerte narra la historia de una niña adoptada, quien aprende a leer gracias a su padre. Ella se hace amiga de un joven judío, cuyos padres están ocultando."
        },
        {
          name: "100 años de soledad",
          author: "Gabriel García Márquez",
          description:
            "Su obra 'Cien años de soledad', publicada en 1967, es una de las novelas más importantes de la literatura del siglo XX. Obtuvo el premio Nobel de Literatura en 1982. El escritor Gabriel García Márquez nació en Arataca, Colombia, el 6 de marzo de 1927"
        }
      ]
    };
  }

  changePageB = newPage => {
    this.setState({
      page: newPage
    });
  };

  addBook = newBook => {
    this.setState({
      bookList: [...this.state.bookList, newBook]
    });
  };

  render() {
    let bookList = this.state.bookList.map((obj, index) => {
      return (
        <tr key={index}>
          <td>{obj.name}</td>
          <td>{obj.author}</td>
          <td className="TextLeft">{obj.description}</td>
        </tr>
      );
    });
    return this.state.page === 1 ? (
      <div className="container">
        <div className="row" />
        <h5 className="center-align">Lista de Libros</h5>
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
              <th>Autor</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>{bookList}</tbody>
        </table>
      </div>
    ) : (
      <BookForm addBook={this.addBook} changePage={this.changePageB} />
    );
  }
}
