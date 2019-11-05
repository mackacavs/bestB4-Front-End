import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { addRecipe } from '../../actions/recipe'

const PostForm = ({ addPost, addRecipe, post: { posts, userPosts }, auth: { user } }) => {

  const [formData, setFormData] = useState({
    description: '',
    expiry: ''
  });

  const { description, expiry } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault()
    addPost(description, expiry)
    setFormData({ ...formData, description: '', expiry: '' })
  }

  return (
    <div className="post-form" style={{ flex: 1 }}>
      <div className="bg-primary p">
        <h3>Add some food to share</h3>
      </div>
      <form className="form my-1" onSubmit={e => onSubmit(e)}>
        <textarea
          name="description"
          cols="30"
          rows="5"
          placeholder="List an ingredient"
          value={description}
          onChange={e => onChange(e)}
          required
        ></textarea>
        <input type ="date"
          name="expiry"
          cols="30"
          rows="5"
          placeholder="When is it expiring?"
          value={expiry}
          onChange={e => onChange(e)}
          required
        />

        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
})

export default connect(mapStateToProps, { addPost, addRecipe })(PostForm)
