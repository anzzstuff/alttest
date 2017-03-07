import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import TesterComponent from './Components/TesterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <TesterComponent />
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;