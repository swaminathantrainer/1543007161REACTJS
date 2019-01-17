import React from 'react';
import styles from './styles';

export default ({
  category, information, location, time
}) => {
  const { infoTextStyle, normalTextStyle } = styles;

  return (
    <div style={{
      padding: '8px'
    }}>
      <p style={styles.infoTextStyle}>Marketplace > {category}</p>
      <p style={{ ...styles.normalTextStyle, 'margin-top': '15px' }}>{information}</p>
      <div style={{
        display: 'flex',
        'flex-direction': 'row',
      }}>
        <p style={styles.infoTextStyle}>{location}</p>
        <p style={{ ...styles.infoTextStyle }}>&bull;</p>
        <p style={styles.infoTextStyle}>{time}</p>
        <p style={styles.infoTextStyle}>&bull;</p>
        <img src='https://via.placeholder.com/20x20' />
      </div>
    </div>
  );
}