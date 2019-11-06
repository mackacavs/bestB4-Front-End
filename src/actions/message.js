import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, ADD_POST, GET_USER_POSTS } from './types';

export const addMessage = (message, user) => async dispatch => {
  console.log("hello")
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let recipient = user

  console.log(recipient);
  console.log(message)

  const body = JSON.stringify({ message, recipient })

  try {
    const res = await axios.post('api/messages', body, config);

    // dispatch(setAlert('Post Created', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}
