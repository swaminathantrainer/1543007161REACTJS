import React, { Component } from 'react';
import { color1, color2, color3, color4 } from './colors';
import { x1, y1, x2, y2, x3, y3, y4, y5, y6 } from './dimens';
import ProductInformationComponent from './ProductInformationComponent';

const ProductPage = () => {
  const {
    rootContainerStyle,
    imageContainerStyle,
    contentContainerStyle,
    infoContainerStyle,
    otherInfoContainerStyle,
    askForDetailsContainerStyle
  } = styles;

  return (
    <div style={rootContainerStyle}>
      <div style={imageContainerStyle}></div>
      <div style={contentContainerStyle}>
        <div style={infoContainerStyle}>
          <ProductInformationComponent />
        </div>
        <div style={otherInfoContainerStyle}></div>
        <div style={askForDetailsContainerStyle}></div>
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
  },

  infoContainerStyle: {
    backgroundColor: color4,
    height: y5
  },

  otherInfoContainerStyle: {
    backgroundColor: color1,
    flex: 1
  },

  askForDetailsContainerStyle: {
    backgroundColor: color4,
    height: y6
  }
}

export default ProductPage;
