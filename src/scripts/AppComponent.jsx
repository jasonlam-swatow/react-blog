import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './BannerComponent.jsx';
import Post from './PostComponent.jsx';
import NewPost from './NewPostComponent.jsx';
import AddPostForm from './AddPostFormComponent.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    }
    this.addPost = this.addPost.bind(this);
    this.renderPost = this.renderPost.bind(this);
  }

  addPost(post) {
    let timestamp = (new Date()).getTime();
    // this.state.posts['post-' + timestamp] = post;
    this.state.posts[`post${timestamp}`] = post;
    this.setState({
      posts: this.state.posts
    });
  }

  renderPost(key) {
    return <NewPost key = {key}
              index = {key}
              details = {this.state.posts[key]} />
  }

  render() {
    let imgOne = "http://41.media.tumblr.com/fdeac98bf23f06c7d3d0ce15239e9bb1/tumblr_mqczgtFTU71s1fs9ro1_1280.jpg";
    let imgTwo = "http://kolyan.net/uploads/posts/2012-06/1338817839_020.jpg";
    let imgThree = "http://i0.wp.com/www.whaleoil.co.nz/wp-content/uploads/2014/02/Marc-Riboud.jpg";
    let imgFour = "http://antikleidi.com/wp-content/uploads/2012/06/15-beijingjune-5-1989-jeff-widener.jpg";
    let dummyPost = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem non explicabo velit eos rerum ea vel aperiam voluptatum soluta quibusdam architecto culpa quisquam illo, facilis nostrum modi ipsum sunt quos eligendi reiciendis facere beatae minus perferendis fugit. Tempore expedita error a, vero veritatis ab, voluptates perferendis autem nisi totam qui.";
    return (
      <div>
        <Banner />
        <div className="row medium-8 large-7 columns">
          <Post ptitle="Lorem ipsum dolor sit"
            pimg={imgOne}
            date="Feb 2, 2016"
            postbody={dummyPost}
            author="Jason Lam"
            comments="2"
            tags="" />
          <Post ptitle="Tempore expedita error a"
            pimg={imgTwo}
            date="Feb 3, 2016"
            postbody={dummyPost}
            author="Jason Lam"
            comments="3" />
          <Post ptitle="Voluptatem non explicabo"
            pimg={imgThree}
            date="Feb 12, 2016"
            postbody={dummyPost}
            author="Jason Lam"
            comments="64" />
          <Post ptitle="Ipsum sunt quos eligendi"
            pimg={imgFour}
            date="Feb 14, 2016"
            postbody={dummyPost}
            author="Jason Lam"
            comments="20" />
          <div className="list-of-posts">
            {Object.keys(this.state.posts).map(this.renderPost)}
          </div>
          <AddPostForm addPost={this.addPost} />
        </div>
      </div>
    )
  }
}