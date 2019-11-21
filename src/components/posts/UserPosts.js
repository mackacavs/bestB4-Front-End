import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions/post';
import UserPostItem from './UserPostItem'

const UserPosts = ({ getUserPosts, post: { userPosts, loading } }) => {
  useEffect(() => {
    getUserPosts();
  }, [getUserPosts])
  return loading ? '' :



    <Fragment>


      <div className="posts right_margin">
        <h1 className="mb" style={{ textAlign: 'center' }}>Here's what you have in your fridge</h1>
        {userPosts.map(post => (
          <UserPostItem key={post._id} post={post} />
        ))}

      </div>
      <br />

    </Fragment>

}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getUserPosts })(UserPosts)
