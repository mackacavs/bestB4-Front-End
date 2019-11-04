import axios from 'axios';
import { ADD_RECIPES } from './types';
import { GET_RECIPES } from './types';

export const addRecipe = (posts, userPosts, postcode) => async dispatch => {

  let localPosts = posts.filter(post => post.postcode.slice(0, 2) === postcode.slice(0, 2))

  let listOfIngredients = []
  localPosts.map(post => {
    listOfIngredients.push(`${post.description} `)
  })
  userPosts.map(post => {
    listOfIngredients.push(`${post.description} `)
  })

  fetch(
    'https://api.spoonacular.com/recipes/findByIngredients?apiKey=a88201885e1544eca8f3aa1b0f4c0547&ingredients=apples,+flour,+sugar&number=2')
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      dispatch({
        type: ADD_RECIPES,
        payload: listOfIngredients
      })
    })

}
