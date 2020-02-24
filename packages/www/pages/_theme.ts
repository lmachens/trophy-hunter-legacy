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
    MuiAppBar: {
      colorPrimary: {
        color: '#fff',
        backgroundColor: '#0a0a0c'
      },
      root: {
        border: 'none',
        borderBottom: `1px solid #4b4b4b`
      }
    },
    MuiPaper: {
      root: {
        border: '1px solid rgba(255, 255, 255, 0.23)',
        backgroundColor: '#1d1c1d'
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#111318',
        border: '1px solid rgba(255, 255, 255, 0.23)',
        maxWidth: 350
      }
    }
  }
});

export default theme;
