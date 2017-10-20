import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  byType: {
    jplaceholder: [],
    soundcloud: [],
  },
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.SET_USERS:
    case actionTypes.SET_USER:
      return {
        ...state,
        ...action.payload.response.entities.users,
      };

    default:
      return state;
  }
}

function createList(filter) {
  return function(state = INITIAL_STATE.byType[filter], action = {}) {
    if (!action.payload || action.payload.filter !== filter) {
      return state;
    }

    switch (action.type) {
      case actionTypes.SET_USERS:
        return [...state, ...action.payload.response.result];

      case actionTypes.SET_USER:
        return [...state, action.payload.response.result];

      default:
        return state;
    }
  };
}

const byTypeReducer = combineReducers({
  jplaceholder: createList('jplaceholder'),
  soundcloud: createList('soundcloud'),
});

const reducer = combineReducers({
  entities: entitiesReducer,
  byType: byTypeReducer,
});

export default reducer;
