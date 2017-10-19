import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';
import * as schemas from './schemas';

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

    const posts = normalize(response, schemas.postListSchema);

    dispatch(setPosts(posts.entities.posts));
    dispatch(setPostIDS(posts.result));

    return posts;
  };
}

export function fetchPost(id) {
  return async dispatch => {
    const response = await api.jplaceholder.posts.getSingle(id);
    const post = normalize(response, schemas.postSchema);

    dispatch(setPost(post.entities.posts));
    dispatch(setPostID(post.result));

    return post;
  };
}
