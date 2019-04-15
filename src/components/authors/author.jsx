import React, {Component} from 'react';

class Author extends Component {
 

  state = {
    author:[]
  };

  render () {
    return (
      <div>
        {this.state.author.map(aut =>
          <div>
            <h2 key={aut.id}>
              {aut.name}
              </h2>
          </div>)}
        
      </div>
    );
  }

  componentDidMount() {
  
  let currentComponent = this;
    //const apiEn = 'https://jsonplaceholder.typicode.com/users';
    const apiEn = 'http://obmc.pro/authors.json';
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
