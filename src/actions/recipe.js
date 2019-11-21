import { ADD_RECIPES } from './types';

export const addRecipe = (posts, userPosts, postcode) => async dispatch => {

  let localPosts = posts.filter(post => post.postcode.slice(0, 2) === postcode.slice(0, 2))

  let listOfIngredients = []

  localPosts.map(post => {
    return listOfIngredients.push(`${post.description}`)
  })
  userPosts.map(post => {
    return listOfIngredients.push(`${post.description}`)
  })
  let url = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=38cf1d4c0e824c288085274da5db1a76&ingredients='

  listOfIngredients.forEach(function (ingredient, index) {
    if (index === 0) {

      url = url + `${ingredient},`

    } else {
      url = url + `+${ingredient},`
    }

  })
  url = url.slice(0, -1)
  url = url + '&number=3'
  fetch(url)
    .then((res) => res.json())
    .then(data => {
      dispatch({
        type: ADD_RECIPES,
        payload: data
      });
    })

}
