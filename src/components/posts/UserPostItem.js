import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteUserPosts } from '../../actions/post';

const PostItem = ({ deleteUserPosts, auth, post: { _id, description, avatar, name, user, expiry, postcode } }) => {

  const onSubmit = async (e,_id) => {
    e.preventDefault()
    deleteUserPosts(_id)
  }
  return (
    !auth.loading && auth.user.postcode.slice(0, 2) === postcode.slice(0, 2) && (
      <div className="ingredient bg-white mb">
        <p className="description">
          {description}
        </p>
        <div className="separator"></div>
        <p className="expiry">
          Expiry Date:&nbsp;
          <Moment format="DD/MM/YYYY">
            {expiry}
          </Moment>
        </p>
        <form onSubmit={e => onSubmit(e,_id)} className="delete-ingredient">
          <input type="submit" className="btn btn-dark" value="Delete item" />
        </form>
      </div>
    )
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {deleteUserPosts})(PostItem)
