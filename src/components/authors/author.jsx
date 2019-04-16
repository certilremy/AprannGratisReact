import React, {Component} from 'react';

class Author extends Component {
 

  state = {
    author:[]
  };

  render () {
    return (
      <div>
        {this.state.author.map(aut =>
          <div key= {aut.id}>
            <h2>
              {aut.name}
            </h2>
            <p>{aut.posts.length} posts</p>
          </div>)}
        
      </div>
    );
  }

  componentDidMount() {
  
  let currentComponent = this;
    const apiEn = 'https://obmc.pro/authors.json';
    fetch(apiEn)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      currentComponent.setState({
       author: data
      })
  })
  
}
}

export default Author;
