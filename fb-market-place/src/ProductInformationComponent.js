import React from 'react';
import { color1, color5 } from './colors';
import { fs2, fs1 } from './fonts';
import { m1, m0, x } from './dimens';

const ProductInformationComponent = () => {
    const {
        infoTextStyle,
        productInformationTextStyle,
        categoryContainerStyle,
        iconStyle,
        locationContainerStyle
    } = styles;

    return (
        <div>
            <div style={categoryContainerStyle}>
                <p
                    style={{
                        flex: 1
                    }}
                    style={infoTextStyle}>Marketplace > Bicycles
                    </p>
                <img style={iconStyle} />
            </div>
            <p style={productInformationTextStyle}>This is a sample description text</p>
            <div style={locationContainerStyle}>
                <p style={infoTextStyle}>Chennai, TN</p>
                <p style={infoTextStyle}>.</p>
                <p style={infoTextStyle}>11 hours ago</p>
                <p style={infoTextStyle}>.</p>
                <img style={iconStyle} />
            </div>
        </div>
    )
};

const styles = {
    infoTextStyle: {
        color: color1,
        fontSize: fs1,
        marginBottom: m1
    },

    productInformationTextStyle: {
        color: color5,
        fontSize: fs2,
        marginBottom: m0
    },

    categoryContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    },

    iconStyle: {
        height: x,
        width: x
    },

    locationContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    }
};

export default ProductInformationComponent;