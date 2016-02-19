import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppComponent.jsx';
import 'foundation-sites/dist/foundation.min.css';
import '../styles/styles.scss';

ReactDOM.render(<App />, document.querySelector('#main'));

window.onscroll = (e) => {
  let nav = document.querySelector('.top-bar'),
      banner = document.querySelector('.big-banner'),
      range = 25,
      scrollTop = document.body.scrollTop;

  if (scrollTop > range) {
    console.log('scrolled!');
    nav.classList.add('scrollNav');
    banner.classList.add('blurred');
  } else {
    nav.classList.remove('scrollNav');
    banner.classList.remove('blurred');
  }
};