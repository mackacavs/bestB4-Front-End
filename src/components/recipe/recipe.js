import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipe'

const Recipe = ({ addRecipe, post: { posts, userPosts }, auth: { user }, recipe }) => {

  return (
    <div className="post-form" style={{ flex: 1 }}>
      {recipe.recipes ? <h1>{recipe.recipes}</h1> : <h1>Click the Above button to get recipes</h1>}
    </div>
  )
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  post: state.post,
  auth: state.auth
})

export default connect(mapStateToProps, { addRecipe })(Recipe)
