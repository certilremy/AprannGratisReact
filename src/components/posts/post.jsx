import React, {Component} from 'react';

class Post extends Component {
  state = {
    title: 'im a title',
    content: "i'm a content",
  };

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h6>{this.state.content}</h6>
      </div>
    );
  }
}

export default Post;
