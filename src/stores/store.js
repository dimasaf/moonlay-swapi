import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import existingReducer from "../features/Existing/reducer";
import crudReducer from "../features/Crud/reducer";

let rootReducer = combineReducers({
  existing: existingReducer,
  crud: crudReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
