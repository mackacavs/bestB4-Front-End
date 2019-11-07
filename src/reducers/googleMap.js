import { ADD_LOCATION } from '../actions/types';

const initialState = {
  location: [],
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_LOCATION:
      return {
        ...state,
        location: payload,
        loading: false
      };

    default:
      return state;
  }
}
