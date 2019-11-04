import { GET_POSTS, POST_ERROR, ADD_POST, GET_USER_POSTS } from '../actions/types';

const initialState = {
  posts: [],
  userPosts: [],
  post: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        userPosts: [...state.userPosts, payload],
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}
