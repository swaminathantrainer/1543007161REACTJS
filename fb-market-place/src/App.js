import React, { Component } from 'react';
import { color1, color2, color3 } from './colors';
import { x1, y1, x2, y2, x3, y3, y4 } from './dimens';
import './App.css';

const App = () => {
  const { rootContainerStyle, imageContainerStyle, contentContainerStyle } = styles;

  return (
    <div style={rootContainerStyle}>
      <div style={imageContainerStyle}></div>
      <div style={contentContainerStyle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

const styles = {
  rootContainerStyle: {
    display: 'flex',
    'flex-direction': 'row',
    backgroundColor: color1,
    position: 'fixed',
    left: x2,
    top: y2,
    width: x1,
    height: y1
  },

  imageContainerStyle: {
    width: x3,
    height: y3,
    backgroundColor: color2,
  },

  contentContainerStyle: {
    backgroundColor: color3,
    flex: 1,
    height: y4,
    display: 'flex',
    'flex-direction': 'column',
  }
}

export default App;
