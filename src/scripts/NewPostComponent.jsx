import React from 'react';
import ReactDOM from 'react-dom';
import helper from './helper.js';

export default class NewPost extends React.Component {
  render() {
    let details = this.props.details;
    return (
      <div className="blog-post">
        <h3 className="ptitle">
          {details.title}
          <small>{helper.getTime()}</small>
        </h3>
        <img className="thumbnail"
          src={details.image}
          alt={details.name} />
        <p>{details.desc}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
            <li><a href="#">Author: {details.name}</a></li>
            <li><a href="#">Comments: 0</a></li>
            <li><a href="#">Tags: {helper.getTaggedName()}</a></li>
          </ul>
        </div>
      </div>
    )
  }
};