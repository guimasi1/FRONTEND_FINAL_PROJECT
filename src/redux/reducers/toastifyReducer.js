const initialState = {
  logged: false,
};

const toastifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, logged: true };

    default:
      return state;
  }
};

export default toastifyReducer;
