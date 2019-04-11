import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Posts from '../src/components/posts/posts';

class App extends Component {
  render () {
    return (
      <Container>
        <Posts />
      </Container>
    );
  }
}

export default App;
