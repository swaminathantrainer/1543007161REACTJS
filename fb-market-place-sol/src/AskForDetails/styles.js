import { padding, colors, fonts, margin } from '../styles/base';

export default {
    rootStyle: {
        display: 'block',
        padding: padding.md,
        'border-top': '2px solid #d3d3d3'
    },

    mainButtonStyle: {
        'background-color': colors.primary,
        width: '100%',
        height: '40px',
        color: '#fff',
        'font-size': fonts.md
    },

    infoTextStyle: {
        color: colors.lightTextColor,
        'font-size': fonts.sm,
        'text-align': 'center',
        'margin': margin.sm,
        padding: padding.sm
    },

    bottomActionContainerStyle: {
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'border-top': `1px solid #d3d3d3`
    }
}