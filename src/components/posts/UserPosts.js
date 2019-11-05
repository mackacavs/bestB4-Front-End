import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserPosts, addPost } from '../../actions/post';
import PostForm from './PostForm'
import PostItem from './PostItem'

const UserPosts = ({ getUserPosts, post: { userPosts, loading } }) => {
  useEffect(() => {
    getUserPosts();
  }, [getUserPosts])
  return loading ? '' :

    <Fragment>
      <div className="posts right_margin">
        {userPosts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}

      </div>
      <br />

    </Fragment>

}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getUserPosts })(UserPosts)
