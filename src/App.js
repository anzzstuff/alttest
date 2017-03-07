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
                <a href="/">create-react-app + alt</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <TesterComponent />
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;