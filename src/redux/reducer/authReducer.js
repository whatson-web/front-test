// Actions
export const login = email => ({
  type: "LOGIN",
  email
});

export const logout = () => ({
  type: "LOGOUT"
});

const INITIAL_STATE = {
  email: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.email
      };
    case "LOGOUT":
      return {
        ...state,
        email: null
      };
    default:
      return state;
  }
};

export default AuthReducer;
