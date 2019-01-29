import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f8b834'
    },
    secondary: {
      main: '#bc7229'
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        border: '1px solid rgba(255, 255, 255, 0.23)'
      }
    }
  }
});

export default theme;
