import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';
import * as schemas from './schemas';

import api from './../../utils/api';

// Action creators
export function setUsers(filter, response) {
  return {
    type: actionTypes.SET_USERS,
    payload: { filter, response },
  };
}

export function setUser(filter, response) {
  return {
    type: actionTypes.SET_USER,
    payload: { filter, response },
  };
}

// Async actions
export function fetchSingle(id) {
  return async dispatch => {
    const result = await api.soundcloud.users.getSingle(id);
    const response = normalize(result, schemas.userSchema);

    dispatch(setUser('soundcloud', response));

    return response.entities.users;
  };
}

export function fetchUsers() {
  return async dispatch => {
    const results = await api.jplaceholder.users.getUsers();
    const response = normalize(results, schemas.userListSchema);

    dispatch(setUsers('jplaceholder', response));

    return response.entities.users;
  };
}

export function searchUsers(term) {
  return async dispatch => {
    const results = await api.soundcloud.users.searchUsers(term);

    const response = normalize(results, schemas.userListSchema);

    dispatch(setUsers('soundcloud', response));

    return response.entities.users;
  };
}
