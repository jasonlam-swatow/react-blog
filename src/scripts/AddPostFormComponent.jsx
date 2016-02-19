import React from 'react';
import ReactDOM from 'react-dom';

export default class AddPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.createPost = this.createPost.bind(this); // with es2015 classes in React, there is no autobinding.
  }

  createPost(event) {
    event.preventDefault();
    let post = {
      title : this.refs.title.value,
      name : this.refs.name.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    this.props.addPost(post);
    this.refs.postForm.reset();
  }

  render() {
    return (
      <div className="callout secondary form-area">
        <h5>Add a Post to the React Blog</h5>
        <form className="post-edit" ref="postForm" onSubmit={this.createPost}>
          <label> Post Title
            <input type="text" ref="title" placeholder="Post Title" required/>
          </label>
          <label> Author Name
            <input type="text" ref="name" placeholder="Full Name required" required/>
          </label>
          <label> Post Content
          <textarea
            ref="desc"
            placeholder="Write your post here" required/>
          </label>
          <label> Image URL - <span className="highlight">use this one to test 'http://goo.gl/ETzSWv'</span>
            <input type="url" ref="image" placeholder="The URL of the featured image for your post" required/>
          </label>
          <button type="submit" className="button">Add Post</button>
        </form>
      </div>
    )
  }
}