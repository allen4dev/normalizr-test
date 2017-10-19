import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  allIds: [],
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.SET_POST:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
}

function allIdsReducer(state = INITIAL_STATE.allIds, action = {}) {
  switch (action.type) {
    case actionTypes.SET_POST_IDS:
      return [...state, ...action.payload];

    case actionTypes.SET_POST_ID:
      return [...state, action.payload];

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  allIds: allIdsReducer,
});

export default reducer;
