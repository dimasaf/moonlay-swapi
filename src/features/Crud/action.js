export const SET_NEW_PEOPLE = "Crud/SET_NEW_PEOPLE";
export const SET_NEW_PLANETS = "Crud/SET_NEW_PLANETS";
export const SET_NEW_STARSHIPS = "Crud/SET_NEW_STARSHIPS";

export const setNewPeople = (payload) => ({
  type: SET_NEW_PEOPLE,
  payload,
});
export const setNewPlanets = (payload) => ({
  type: SET_NEW_PLANETS,
  payload,
});
export const setNewStarship = (payload) => ({
  type: SET_NEW_STARSHIPS,
  payload,
});
