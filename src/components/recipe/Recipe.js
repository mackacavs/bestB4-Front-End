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
  if (recipe.recipes){
    return (
      <div className='container'>
      <div className='flex_container'>
      <div style={{flex:1}}>
      <h1 style={{textAlign:'center'}}>{recipe.recipes[0].title}</h1>
      <img className='recipeimage' src={recipe.recipes[0].image}/>
      </div>
      <div style={{flex:1}}>
      <h1 style={{textAlign:'center'}}>{recipe.recipes[1].title}</h1>
      <img className='recipeimage' src={recipe.recipes[1].image}/>
      </div>
      <div style={{flex:1}}>
      <h1 style={{textAlign:'center'}}>{recipe.recipes[2].title}</h1>
      <img className='recipeimage' src={recipe.recipes[2].image}/>
      </div>
      </div>
      </div>
    )
  }else {
    return (
      <h1>Click above for recipes</h1>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  post: state.post,
  auth: state.auth
})

export default connect(mapStateToProps, { addRecipe })(Recipe)
