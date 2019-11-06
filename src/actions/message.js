import axios from 'axios';
import { setAlert } from './alert';
import { GET_MESSAGES, MESSAGE_ERROR } from './types';


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

    dispatch(setAlert('Message sent', 'success'))
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('api/messages/')

    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })

  }
}
