const inicialState = {
  isLogged: true,
  logginError: "",
  loggedUser: {}
};
//npm i connected-react-router --save
//npm i connected-react-router --save
//npm i redux --save
//npm i redux-thunk --save
////npm i history --save

export default (state = inicialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "logIn":
      return {
        ...state,
        isLogged: true,
        loggedUser: action.user,
        logginError: ""
      };
    case "logInError":
      return {
        ...state,
        logginError: action.error
      };
    case "logOut":
      return {
        ...state,
        isLogged: false,
        loggedUser: {}
      };
    default:
      return state;
  }
};

export const logIn = val => {
  return dispatch => {
    return setTimeout(() => {
      if (val.username === "1" && val.password === "1") {
        val.nombre = "Kevin";
        dispatch({
          type: "logIn",
          user: val
        });
      } else {
        dispatch({
          type: "logInError",
          error: "Hay un problema en su info"
        });
      }
    }, 100);
  };
};

export const LogOut = () => {
  return dispatch => {
    dispatch({
      type: "logOut"
    });
  };
};
