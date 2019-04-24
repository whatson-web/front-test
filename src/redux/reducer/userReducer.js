import { data } from "../../data";

// Actions

const INITIAL_STATE = {
  listUser: data
};

export const updateList = listUser => ({
  type: "UPDATE_LIST",
  listUser
});

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_LIST":
      return {
        ...state,
        listUser: action.listUser
      };
    default:
      return state;
  }
};

export default userReducer;
