import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteUserPosts } from '../../actions/post';

const UserPostItem = ({ deleteUserPosts, auth, post: { _id, description, avatar, name, user, expiry, postcode } }) => {

  const onSubmit = async (e,_id) => {
    e.preventDefault();
    deleteUserPosts(_id);
  }

  return (
    !auth.loading && (
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
        <button onClick={e => onSubmit(e,_id)} className="btn btn-dark delete-ingredient">
          Delete item
        </button>
      </div>
    )
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {deleteUserPosts})(UserPostItem)
