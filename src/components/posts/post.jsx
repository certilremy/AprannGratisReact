import React, {Component} from 'react';

class Post extends Component {

  state = {
    post:[]
  };

  render() {
    return (
      <div>
        {this.state.post.map(post =>
          <div key={post.id}>
            <h2>
              {post.title}
            </h2>
            <p>{post.content}</p>
            <p>by: {post.author.name}</p>
          </div>)}

      </div>
    );
  }

  componentDidMount() {

    let currentComponent = this;
   
    const apiEndp = 'https://obmc.pro/posts/api/json';
    fetch(apiEndp)
      .then(function (p) {
        return p.json();
      })
      .then(function (p) {
        console.log(p);
        currentComponent.setState({
          post: p
        })
      })

  }


}

export default Post;


