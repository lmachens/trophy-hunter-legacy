import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import universeTheme from './universeTheme';

const style = {
  app: {
    padding: '8px',
    marginLeft: '60px'
  },
  navigation: {
    display: 'inline-block',
    float: 'left',
    width: '60px',
    position: 'absolute'
  }
};

export default class AdminLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(universeTheme)}>
        <div className="app">
          <header>
            <img className="logo" src="/images/logo.png" />
          </header>
          <main>
            <div style={style.app}>{this.props.main}</div>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

AdminLayout.propTypes = {
  main: PropTypes.object
};
