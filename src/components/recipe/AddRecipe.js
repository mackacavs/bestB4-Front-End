import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipe'

const Recipe = ({ addRecipe, post: { posts, userPosts }, auth: { user } }) => {

  const onSubmit = async e => {
    e.preventDefault()
    addRecipe(posts, userPosts, user.postcode)
  }

  return (
    <div className="post-form" style={{ flex: 1 }}>
      <form className="form my-1" onSubmit={e => onSubmit(e)}>

        <input type="submit" className="btn btn-dark my-1" value="Submit" />

      </form>

    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  recipe: state.recipe
})

export default connect(mapStateToProps, { addRecipe })(Recipe)
