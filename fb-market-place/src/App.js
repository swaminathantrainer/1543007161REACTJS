import React from 'react';
import './App.css';
import ProductPage from './ProductPage';
import { f2 } from './fonts';
import { color5 } from './colors';

const App = () => {
    return (
        <div style={styles.rootStyle}>
            <ProductPage />
        </div>
    )
};

const styles = {
    rootStyle: {
        fontFamily: f2,
        color: color5
    }
}

export default App;