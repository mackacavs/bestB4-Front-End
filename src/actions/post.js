import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, ADD_POST, GET_USER_POSTS, DELETE_POSTS, DELETE_ERROR } from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('api/posts/')

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}

export const getUserPosts = () => async dispatch => {
  try {
    const res = await axios.get('api/posts/currentuser')

    dispatch({
      type: GET_USER_POSTS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}

export const deleteUserPosts = (id) => async dispatch => {
  try {
    await axios.delete(`api/posts/${id}`)
    dispatch({
      type: DELETE_POSTS,
      payload: id
    })
    dispatch(setAlert('Post Deleted', 'success'))
  } catch (err) {
    dispatch({
      type: DELETE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}

export const addPost = (description, expiry) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ description, expiry })

  try {
    const res = await axios.post('api/posts', body, config);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}
