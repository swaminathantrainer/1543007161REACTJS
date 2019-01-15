import React, { Component } from 'react';

const ProductInformationComponent = ({
  category, information, location, time
}) => {
  const { infoTextStyle, normalTextStyle } = styles;

  return (
    <div style={{
      padding: '8px'
    }}>
      <p style={infoTextStyle}>Marketplace > {category}</p>
      <p style={{ ...normalTextStyle, 'margin-top': '15px' }}>{information}</p>
      <div style={{
        display: 'flex',
        'flex-direction': 'row',
      }}>
        <p style={infoTextStyle}>{location}</p>
        <p style={{ ...infoTextStyle }}>&bull;</p>
        <p style={infoTextStyle}>{time}</p>
        <p style={infoTextStyle}>&bull;</p>
        <img src='https://via.placeholder.com/20x20' />
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    const {
      rootStyle,
      imageContainerStyle,
      contentContainerStyle,
      askForMoreModalStyle,
      textContentContainer,
      infoContainerStyle,
      otherInfoContainerStyle
    } = styles;

    return (
      <div style={rootStyle}>
        <div style={imageContainerStyle}>
          <img src='https://via.placeholder.com/800x500' alt='bicycle' style={{
            display: 'block',
            margin: 'auto',
            'max-width': '100%',
            height: 'auto'
          }} />
        </div>
        <div style={contentContainerStyle}>
          <div style={textContentContainer}>
            <div style={infoContainerStyle}>
              <ProductInformationComponent
                category='Bicycles'
                location='Chennai, TN'
                time='11 hours ago'
                information='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took'
              />
            </div>
            <div style={otherInfoContainerStyle}></div>
          </div>
          <div style={askForMoreModalStyle}></div>
        </div>
      </div>
    );
  }
}

const styles = {
  rootStyle: {
    display: 'flex',
    'flex-direction': 'row',
    position: 'fixed',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%'
  },

  imageContainerStyle: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    width: '70%',
    height: '100%',
    'min-width': '300px'
  },

  contentContainerStyle: {
    display: 'flex',
    'flex-direction': 'column',
    width: '350px',
    height: '100%',
    'min-width': '150px'
  },

  askForMoreModalStyle: {
    'background-color': '#E74C3C',
    width: '100%',
    height: '25%'
  },

  textContentContainer: {
    flex: 1,
    width: '100%',
    overflow: 'auto'
  },

  infoContainerStyle: {
    width: '100%',
    'min-width': '300px',
    height: '180px'
  },

  otherInfoContainerStyle: {
    width: '100%',
    'min-width': '300px',
  },

  infoTextStyle: {
    color: '#ABB2B9',
    'font-size': '14px',
    margin: '4px'
  },

  normalTextStyle: {
    color: 'black',
    'font-size': '16px',
    margin: '4px'
  }
}

export default App;
