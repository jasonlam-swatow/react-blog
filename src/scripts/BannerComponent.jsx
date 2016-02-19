import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './NavComponent.jsx';

export default class Banner extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="big-banner">
          <div className="callout large primary">
            <div className="row column text-center">
              <h1>React Blog</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
};