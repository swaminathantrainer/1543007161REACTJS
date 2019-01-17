import React from 'react';
import styles from './styles';

export default ({
    rootStyle,
    leftContainerStyle,
    rightContainerStyle,
    renderLeft,
    renderRight
}) => {
    return (
        <div style={{ ...styles.rootStyle, ...rootStyle }}>
            <div style={{ ...styles.leftContainerStyle, ...leftContainerStyle }}>
                {renderLeft()}
            </div>
            <div style={{ ...styles.rightContainerStyle, ...rightContainerStyle }}>
                {renderRight()}
            </div>
        </div>
    );
};