import React, { Component } from 'react';
import styles from './styles';
import ProductInformationComponent from '../ProductInformation/ProductInformationComponent';
import LeftRightLayout from '../Layouts/LeftRightLayout/LeftRightLayout';
import AskForDetails from '../AskForDetails/AskForDetails';

class App extends Component {
  render() {
    return (
      <LeftRightLayout
        renderLeft={() => (
          <img src='https://via.placeholder.com/900x700' alt='bicycle' style={{
            'width': '100%',
            'height': '100%',
            height: 'auto'
          }} />
        )}

        renderRight={() => (
          <div style={styles.contentContainerStyle}>
            <div style={styles.textContentContainer}>
              <div style={styles.infoContainerStyle}>
                <ProductInformationComponent
                  category='Bicycles'
                  location='Chennai, TN'
                  time='11 hours ago'
                  information='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took'
                />
              </div>
              <div style={styles.otherInfoContainerStyle}></div>
            </div>
            <div style={styles.askForMoreModalContainerStyle}>
              <AskForDetails />
            </div>
          </div>
        )}
      />
    );
  }
}

export default App;
