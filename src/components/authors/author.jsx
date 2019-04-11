import React, {Component} from 'react';

class Author extends Component {
  state = {
    name: 'Certil',
    email: 'c@gmail.com',
  };

  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.email}</p>

      </div>
    );
  }
}

export default Author;
