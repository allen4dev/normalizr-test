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
      return {
        ...state,
        ...action.payload.users,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        [action.payload.user.id]: action.payload.user,
      };

    default:
      return state;
  }
}

function jplaceholderReducer(
  state = INITIAL_STATE.byType.jplaceholder,
  action = {}
) {
  if (!action.payload || action.payload.filter !== 'jsonplaceholder') {
    return state;
  }

  switch (action.type) {
    case actionTypes.SET_USERS:
      return [...state, ...Object.keys(action.payload.users)];

    case actionTypes.SET_USER:
      return [...state, action.payload.user.id];

    default:
      state;
  }
}

function soundcloudReducer(
  state = INITIAL_STATE.byType.soundcloud,
  action = {}
) {
  if (!action.payload || action.payload.filter !== 'soundcloud') {
    return state;
  }

  switch (action.type) {
    case actionTypes.SET_USERS:
      return [...state, ...Object.keys(action.payload.users)];

    case actionTypes.SET_USER:
      return [...state, action.payload.id];

    default:
      state;
  }
}

const byTypeReducer = combineReducers({
  jplaceholder: jplaceholderReducer,
  soundcloud: soundcloudReducer,
});

const reducer = combineReducers({
  entities: entitiesReducer,
  byType: byTypeReducer,
});

export default reducer;
