import { SET_LOADING, SET_PLANET, SET_PEOPLE, SET_STARSHIP } from "./action";

const initialState = {
  isLoading: false,
  planets: [],
  peoples: [],
  starships: [],
};

function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_PLANET:
      return {
        ...state,
        planets: payload,
      };
    case SET_PEOPLE:
      return {
        ...state,
        peoples: payload,
      };
    case SET_STARSHIP:
      return {
        ...state,
        starships: payload,
      };
    default:
      return state;
  }
}

export default reducer;
