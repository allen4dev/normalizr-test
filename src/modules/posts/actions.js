import * as actionTypes from './actionTypes';

import api from './../../utils/api';

// Action creators
export function setPosts(posts) {
  return {
    type: actionTypes.SET_POSTS,
    payload: posts,
  };
}

export function setPost(post) {
  return {
    type: actionTypes.SET_POST,
    payload: post,
  };
}

// Async actions
export function fetchPosts(page = 1) {
  return async dispatch => {
    const response = await api.jplaceholder.posts.getPosts(page);

    const posts = response.reduce((obj, post) => {
      return {
        ...obj,
        [post.id]: post,
      };
    }, {});

    dispatch(setPosts(posts));
  };
}

export function fetchPost(id) {
  return async dispatch => {
    const post = await api.jplaceholder.posts.getSingle(id);

    dispatch(setPost(post));

    return post;
  };
}
