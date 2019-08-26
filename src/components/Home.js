import React from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from './Navigation.js';

function Home(props) {
  return (
    <Container fluid>
      <Navigation />
    </Container>
  );
}

export default Home;