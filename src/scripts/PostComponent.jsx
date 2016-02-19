import React from 'react';
import ReactDOM from 'react-dom';
import helper from './helper.js';

export default class Post extends React.Component {
  tryClick() {
    alert('Just trying out click events...');
  }

  render() {
    let comm = 'Comments';
    return (
      <div className="blog-post">
        <h3 className="ptitle">
          {this.props.ptitle}
          <small>{this.props.date}</small>
        </h3>
        <img className="thumbnail"
          src={this.props.pimg} />
        <p>{this.props.postbody}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
            <li><a href="#" onClick={this.tryClick}>Author: {this.props.author}</a></li>
            <li><a href="#">{comm}: {this.props.comments}</a></li>
            <li><a href="#">Tags: {helper.getTaggedName()}</a></li>
          </ul>
        </div>
      </div>
    )
  }
};