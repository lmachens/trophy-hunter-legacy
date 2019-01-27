import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

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
  },
  overrides: {
    MuiTypography: {
      root: {
        transform: 'translate3d(0,0,0)' // Workaround to prevent PopperJS to change text color
      }
    },
    MuiButton: {
      root: {
        color: '#c4b998'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: 'rgb(17, 19, 24)'
      }
    },
    MuiIconButton: {
      root: {
        color: '#c4b998'
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#111318',
        color: '#c4b998',
        border: '1px solid rgb(147, 115, 65)',
        maxWidth: 350,
        transition: 'none !important'
      }
    },
    MuiInput: {
      root: {
        lineHeight: '0.5em'
      }
    },
    MuiSelect: {
      root: {
        color: '#c4b998'
      },
      selectMenu: {
        minHeight: 'auto'
      }
    },
    MuiList: {
      root: {
        backgroundColor: '#111318',
        border: '1px solid rgb(147, 115, 65)'
      }
    },
    MuiMenuItem: {
      root: {
        color: '#c4b998'
      }
    },
    MuiGrid: {
      'spacing-xs-8': {
        '& > $item': {
          padding: 3
        }
      }
    }
  }
});

export default theme;
