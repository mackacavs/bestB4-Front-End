import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import post from './post';
import recipe from './recipe';
import message from './message';


export default combineReducers({
  alert,
  auth,
  post,
  recipe,
  message
});
