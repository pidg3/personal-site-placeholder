import React, { Component } from 'react';
import Responsive from 'react-responsive';
import styled from 'styled-components';
// import logo from './logo.svg';
import './App.css';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const DesktopContainer = styled.div`
  background-color: red 
`;

class App extends Component {
  render() {
    return (
      <div>
        <Desktop>
          <DesktopContainer>
          <p>I'm a desktop</p>
          </DesktopContainer>
        </Desktop>
        <Tablet>
          <p>I'm a tablet</p>
        </Tablet>
        <Mobile>
          <p>I'm a mobile</p>
        </Mobile>
      </div>
    );
  }
}

export default App;
