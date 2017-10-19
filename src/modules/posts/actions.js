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

export function setPostIDS(ids) {
  return {
    type: actionTypes.SET_POST_IDS,
    payload: ids,
  };
}

export function setPostID(id) {
  return {
    type: actionTypes.SET_POST_ID,
    payload: id,
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
    dispatch(setPostIDS(Object.keys(posts)));

    return posts;
  };
}

export function fetchPost(id) {
  return async dispatch => {
    const post = await api.jplaceholder.posts.getSingle(id);

    dispatch(setPost(post));
    dispatch(setPostID(post.id));

    return post;
  };
}
