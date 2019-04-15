import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Posts from '../src/components/posts/posts';
import Authors from '../src/components/authors/authors';

class App extends Component {
  render () {
    return (
      <Container>
        <Authors />
        <Posts />
      </Container>
    );
  }
}

export default App;
