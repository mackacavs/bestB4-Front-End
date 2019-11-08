import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipe'

const Recipe = ({ addRecipe, post: { posts, userPosts }, auth: { user }, recipe }) => {

  // return (
  //   <div className="post-form" style={{ flex: 1 }}>
  //     {recipe.recipes ?
  //       <h1>{recipe.recipes[0].title}, {recipe.recipes[2].title}</h1>
  //
  //
  //      : <h1>Click the Above button to get recipes</h1>}
  //   </div>
  // )
  if (recipe.recipes) {
    return (

      <div className='container'>
        <div className='flex_container'>
          <div style={{ flex: 1 }}>
            <h3 style={{ textAlign: 'center' }}>{recipe.recipes[0].title.length > 24 ? recipe.recipes[0].title.substring(0, 26) + '...' : recipe.recipes[0].title}</h3>
            <a target='_blank' href={"https://www.google.com/search?q=" + recipe.recipes[0].title.replace(/ /g, '+')}>
              <img className='recipeimage' src={recipe.recipes[0].image} />
            </a>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ textAlign: 'center' }}>{recipe.recipes[1].title.length > 24 ? recipe.recipes[1].title.substring(0, 15) + '...' : recipe.recipes[1].title}</h3>
            <a target='_blank' href={"https://www.google.com/search?q=" + recipe.recipes[1].title.replace(/ /g, '+')}>
              <img className='recipeimage' src={recipe.recipes[1].image} />
            </a>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ textAlign: 'center' }}>{recipe.recipes[2].title.length > 24 ? recipe.recipes[2].title.substring(0, 26) + '...' : recipe.recipes[2].title}</h3>
            <a target='_blank' href={"https://www.google.com/search?q=" + recipe.recipes[2].title.replace(/ /g, '+')}>
              <img className='recipeimage' src={recipe.recipes[2].image} />
            </a>
            <br />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <h1></h1>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  post: state.post,
  auth: state.auth
})

export default connect(mapStateToProps, { addRecipe })(Recipe)
