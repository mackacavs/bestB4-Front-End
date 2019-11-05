import React, { Fragment } from 'react'
import Posts from '../posts/Posts';
import UserPosts from '../posts/UserPosts';
import AddRecipe from '../recipe/AddRecipe';
import Recipe from '../recipe/Recipe';


import PostForm from '../posts/PostForm'

const Profile = props => {
  return (
    <Fragment>
      <h4 className="mb">Here's what you have in your fridge</h4>
      <div className="flex_container">
        <UserPosts />
        <PostForm />
      </div>
      <h4>Here's what's available close to you</h4>
      <Posts />
      <h4>Here's how to make it....</h4>
      <AddRecipe />
      <Recipe />

      <h4>Here's how you can get there...</h4>

    </Fragment>
  )
}

export default Profile
