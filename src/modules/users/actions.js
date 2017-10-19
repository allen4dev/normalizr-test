import * as actionTypes from './actionTypes';

import api from './../../utils/api';

// Action creators
export function setUsers(users) {
  return {
    type: actionTypes.SET_USERS,
    payload: users,
  };
}

export function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    payload: user,
  };
}

// Async actions
export function fetchSingle(id) {
  return async dispatch => {
    const response = await api.soundcloud.users.getSingle(id);

    dispatch(setUser(response));

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

    dispatch(setUsers(users));

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

    dispatch(setUsers(users));

    return users;
  };
}
