import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';



const MessageItem = ({ auth, message: { _id, name, message } }) => {


  return (
    !auth.loading && (
      <div className="post bg-white mb">
      <div>
      <h4 style={{ width: "150px", marginBottom: "0.5rem" }} className="mb-1">{name}</h4>
      </div>
      <div>

      <p className="my-1">
      Message: {message}
      </p>

      </div>

      </div>

    )
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(MessageItem)
