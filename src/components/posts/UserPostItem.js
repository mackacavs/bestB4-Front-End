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
      <div className="post bg-white mb">
        <div>
          <h4 style={{ width: "150px", marginBottom: "0.5rem" }} className="mb-1">{name}</h4>
          <img style={{ width: "40px" }}
            className="round-img"
            src={avatar}
            alt="" />
        </div>
        <div>
          <p className="my-1">
            Description: {description}
          </p>
          <p className="post-date">
            Expiry Date:&nbsp;
            <Moment format="DD/MM/YYYY">
              {expiry}
            </Moment>
          </p>
          <form  onSubmit={e => onSubmit(e,_id)}>
            <input type="submit" className="btn btn-dark my-1" value="Delete item" />
          </form>
        </div>
      </div>
    )
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {deleteUserPosts})(PostItem)
