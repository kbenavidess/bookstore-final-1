import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "LOG_IN" }),
    decrement: () => dispatch({ type: "LOG_OUT" })
  };
};

const createConnection = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ComponentWithConnectionToRedux = createConnection(App);

export default ComponentWithConnectionToRedux;
