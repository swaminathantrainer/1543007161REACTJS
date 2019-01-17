import React from 'react';
import styles from './styles';
import { colors, fonts, margin, padding } from '../styles/base';

const renderBottomAction = (action, clickHandler) => {
    return (
        <div style={{
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center',
            margin: margin.sm
        }}>
            <img
                style={{
                    margin: margin.sm
                }}
                src='https://via.placeholder.com/20x20' />
            <p style={{
                color: colors.primaryTextColor,
                'font-size': fonts.md
            }}>{action}</p>
        </div>
    )
}

export default ({
    detailsButtonClickhandler,
    messageButtonClickHandler,
    shareButtonClickHandler,
    saveButtonCliclHandler
}) => {
    return (
        <div style={styles.rootStyle}>
            <button
                style={styles.mainButtonStyle}
                onClick={detailsButtonClickhandler}
            >
                Ask For Details
                </button>
            <p style={styles.infoTextStyle}>
                This automatically sends the message to the seller asking for availablity
            </p>
            <div style={styles.bottomActionContainerStyle}>
                {renderBottomAction('Message', messageButtonClickHandler)}
                {renderBottomAction('Save', saveButtonCliclHandler)}
                {renderBottomAction('Share', shareButtonClickHandler)}
            </div>
        </div>
    )
};