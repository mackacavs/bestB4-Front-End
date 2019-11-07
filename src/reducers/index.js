import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import post from './post';
import recipe from './recipe';
import message from './message';
import googleMap from './googleMap';


export default combineReducers({
  alert,
  auth,
  post,
  recipe,
  message,
  googleMap
});
