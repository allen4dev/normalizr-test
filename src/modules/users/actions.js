import * as actionTypes from './actionTypes';

import api from './../../utils/api';

// Action creators
export function setUsers(filter, users) {
  return {
    type: actionTypes.SET_USERS,
    payload: { filter, users },
  };
}

export function setUser(filter, user) {
  return {
    type: actionTypes.SET_USER,
    payload: { filter, user },
  };
}

// Async actions
export function fetchSingle(id) {
  return async dispatch => {
    const response = await api.soundcloud.users.getSingle(id);

    dispatch(setUser('soundcloud', response));

    return response;
  };
}

export function fetchUsers() {
  return async dispatch => {
    const response = await api.jplaceholder.users.getUsers();
    const users = response.reduce((obj, user) => {
      return {
        ...obj,
        [user.id]: user,
      };
    }, {});

    dispatch(setUsers('jsonplaceholder', users));

    return users;
  };
}

export function searchUsers(term) {
  return async dispatch => {
    const response = await api.soundcloud.users.searchUsers(term);

    const users = response.reduce((obj, user) => {
      return {
        ...obj,
        [user.id]: user,
      };
    }, {});

    dispatch(setUsers('soundcloud', users));

    return users;
  };
}
