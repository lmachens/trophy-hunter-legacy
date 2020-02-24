import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from 'material-ui/utils/colorManipulator';
import { fullWhite } from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  fontSize: '12px',
  borderRadius: 2,
  palette: {
    primary1Color: '#937341',
    //primary2Color: 'red',
    //primary3Color: 'green',
    accent1Color: '#937341',
    //accent2Color: 'red',
    //accent3Color: 'red',
    textColor: '#c4b998',
    secondaryTextColor: '#937341',
    alternateTextColor: '#c4b998',
    canvasColor: '#111318',
    borderColor: '#31271e',
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
    onlineColor: 'green',
    awayColor: '#676767',
    ingameColor: 'orange',
    obtainedColor: 'rgb(246, 246, 246)',
    firstTimeColor: '#be9820',
    activeQuestColor: '#55b526',
    firstTimeAndActiveQuestColor: '#21ccc5',
    win: 'green',
    loss: '#9C172A'
  },
  boxBackground: {
    filter: 'brightness(.3) grayscale(100%)',
    opacity: '.3'
  },
  snackbar: {
    backgroundColor: '#111318'
  },
  toolbar: {
    backgroundColor: 'transparent'
  },
  popover: {
    border: '1px solid #7e6439'
  }
};

export const theme = createMuiTheme({
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
      color: '#c4b998',
      fontSize: '0.8rem'
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
      },
      textPrimary: {
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
