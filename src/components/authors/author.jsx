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
        <h1>{this.state.eamil}</h1>

      </div>
    );
  }
}

export default Author;
