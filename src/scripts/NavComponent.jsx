import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div classNam="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Blog</li>
            <li><a href="#">Foo</a></li>
            <li><a href="#">Bar</a></li>
            <li><a href="#">Baz</a></li>
          </ul>
        </div>
      </div>
    )
  }
};