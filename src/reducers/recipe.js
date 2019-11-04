import { ADD_RECIPES } from '../actions/types';
import { GET_RECIPES } from '../actions/types';

const initialState = {
  recipes: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_RECIPES:
      return {
        ...state,
        recipes: payload,
        loading: false
      };
    case GET_RECIPES:
      return { state }
    default:
      return state;
  }
}
