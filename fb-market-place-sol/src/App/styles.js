import { colors, padding } from '../styles/base';

export default {
  contentContainerStyle: {
    display: 'flex',
    'flex-direction': 'column',
    width: '100%',
    height: '100%',
    'min-width': '300px',
  },

  askForMoreModalContainerStyle: {
    width: '100%',
    height: '180px'
  },

  textContentContainer: {
    flex: 1,
    width: '100%',
    overflow: 'auto'
  },

  infoContainerStyle: {
    width: '100%',
    height: '180px',
    padding: padding.sm,
    'border-bottom': `1px solid #d3d3d3`
  },

  otherInfoContainerStyle: {
    width: '100%',
    'min-width': '300px'
  }
}