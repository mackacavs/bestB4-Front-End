import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../actions/message';

import MessageItem from './MessageItem'

const Messages = ({ getMessages, message: { messages, loading } }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages])
  return loading ? '' :

    <Fragment>
      <div className="posts right_margin">
        {messages.map(message => (
          <MessageItem key={message._id} message={message} />
        ))}
      </div>
      <br />

    </Fragment>

}

const mapStateToProps = state => ({
  message: state.message
})

export default connect(mapStateToProps, { getMessages })(Messages)
