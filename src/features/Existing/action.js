import axios from "axios";
export const SET_LOADING = "existing/SET_LOADING";
export const SET_PLANET = "existing/SET_PLANET";
export const SET_PEOPLE = "existing/SET_PEOPLE";
export const SET_STARSHIP = "existing/SET_STARSHIP";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
export const setPlanet = (payload) => ({
  type: SET_PLANET,
  payload,
});
export const setPeople = (payload) => ({
  type: SET_PEOPLE,
  payload,
});
export const setStarship = (payload) => ({
  type: SET_STARSHIP,
  payload,
});

export const fetchPlanets = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`https://swapi.dev/api/planets`);
    dispatch(setLoading(false));
    const { status, data } = response;
    if (status === 200) {
      dispatch(setPlanet(data.results));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.error("ERR ", error);
  }
};
export const fetchPeople = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`https://swapi.dev/api/people`);
    dispatch(setLoading(false));
    const { status, data } = response;
    if (status === 200) {
      dispatch(setPeople(data.results));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.error("ERR ", error);
  }
};
export const fetchStarship = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`https://swapi.dev/api/starships`);
    dispatch(setLoading(false));
    const { status, data } = response;
    if (status === 200) {
      dispatch(setStarship(data.results));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.error("ERR ", error);
  }
};
