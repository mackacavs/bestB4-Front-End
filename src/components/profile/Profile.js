import React, { Fragment } from 'react'
import Posts from '../posts/Posts';
import UserPosts from '../posts/UserPosts';
import AddRecipe from '../recipe/AddRecipe';
import Recipe from '../recipe/Recipe';
import GoogleMap from '../googlemap/GoogleMap';

import PostForm from '../posts/PostForm'

const Profile = props => {
  return (
    <Fragment>
      <h4 className="mb"></h4>
      <div className="flex_container">
        <UserPosts />
        <PostForm />
      </div>
      <h2>Here's what's available close to you</h2>
      <br />
      <Posts />
      <AddRecipe />
      <Recipe />

      <h2>Here's how you can get there...</h2>
      <br />
      <br />
      <GoogleMap />
    </Fragment>
  )
}

export default Profile
