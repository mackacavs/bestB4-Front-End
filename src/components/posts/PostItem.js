import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/message'
import { addLocation } from '../../actions/googleMap'


const PostItem = ({ addMessage, addLocation, auth, post: { _id, description, avatar, name, user, expiry, postcode } }) => {

  const [formData, setFormData] = useState({
    message: '',
  });

  const { message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault()
    addMessage(message, user)
    setFormData({ ...formData, message: '' })
  }

  const onSubmitLocation = async (e, postcode) => {
    e.preventDefault()
    addLocation(postcode, description, name)
  }

  if (!auth.loading
    && postcode
    && auth.user.postcode
    && auth.user.postcode.slice(0, 2) === postcode.slice(0, 2)
  ) {
    return (
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
          <p className="my-1">
            Postcode: {postcode}
          </p>
          <p className="post-date">
            Expiry Date:&nbsp;
            <Moment format="DD/MM/YYYY">
              {expiry}
            </Moment>
          </p>
        </div>
        <form className="form my-1" onSubmit={e => onSubmit(e)}>
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Send a message"
            value={message}
            onChange={e => onChange(e)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
        <form onSubmit={e => onSubmitLocation(e, postcode)}>
          <input type="submit" className="btn btn-dark my-1" value="Check Location" />
        </form>

      </div>
    )
  } else {
    return '';
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { addMessage, addLocation })(PostItem)
