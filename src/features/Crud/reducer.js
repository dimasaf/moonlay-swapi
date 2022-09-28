import { SET_NEW_PEOPLE, SET_NEW_PLANETS, SET_NEW_STARSHIPS } from "./action";

const initialState = {
  people: [],
  planets: [],
  starships: [],
};

function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_NEW_PEOPLE:
      return {
        ...state,
        people: payload,
      };
    case SET_NEW_PLANETS:
      return {
        ...state,
        planets: payload,
      };
    case SET_NEW_STARSHIPS:
      return {
        ...state,
        starships: payload,
      };
    default:
      return state;
  }
}

export default reducer;
