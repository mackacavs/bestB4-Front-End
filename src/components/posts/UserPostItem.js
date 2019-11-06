import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getUserPosts, addPost, deleteUserPosts } from '../../actions/post';




// const { description, expiry } = formData;
// const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
const onSubmit = async e => {
  e.preventDefault()
  deleteUserPosts()
  // setFormData({ ...formData, description: '', expiry: '' })
}

const PostItem = ({ auth, post: { _id, description, avatar, name, user, expiry, postcode } }) => {
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
          <form  onSubmit={e => onSubmit(e)}>
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

export default connect(mapStateToProps, {})(PostItem)
