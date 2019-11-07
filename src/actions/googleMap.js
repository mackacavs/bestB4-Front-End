import axios from 'axios';
import { setAlert } from './alert';
import { ADD_LOCATION } from './types';


export const addLocation = (location, description, name) => async dispatch => {

  location = location.replace(/\s/g, '');
  let lng;
  let lat
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key={key}`)
    .then((res) => res.json())
    .then(data => {
      lng = data.results[0].geometry.location.lng;
      lat = data.results[0].geometry.location.lat;
      dispatch({
        type: ADD_LOCATION,
        payload: { lat, lng, name, description }
      })

    })



}
