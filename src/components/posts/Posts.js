import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostForm from './PostForm'
import PostItem from './PostItem'

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts])
  return loading ? '' :

    <Fragment>
      <div className="posts right_margin">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
      <br />

    </Fragment>

}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
