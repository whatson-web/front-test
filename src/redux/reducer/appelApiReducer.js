import axios from "axios";

const apiUrl = "https://geo.api.gouv.fr/regions";

export const storeRegions = data => {
  return {
    type: "GET_REGIONS",
    regions: data
  };
};

export const getRegions = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(res => dispatch(storeRegions(res.data)))
      .catch(error => {
        throw error;
      });
  };
};

const INITIAL_STATE = {
  regions: null
};

const appelApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_REGIONS":
      return {
        ...state,
        regions: action.regions
      };
    default:
      return state;
  }
};

export default appelApiReducer;
