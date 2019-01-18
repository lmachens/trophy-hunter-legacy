import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#c4b998'
    },
    secondary: {
      main: '#937341'
    }
  },
  typography: {
    body1: {
      color: '#c4b998'
    },
    body2: {
      color: '#c4b998'
    },
    caption: {
      color: '#c4b998'
    },
    useNextVariants: true
  }
});

export default theme;
