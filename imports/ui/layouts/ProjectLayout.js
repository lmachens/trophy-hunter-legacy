import { HomeIcon } from '../components/icons';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from '../components/navigation/Navigation';
import PropTypes from 'prop-types';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import universeTheme from './universeTheme';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';

const styles = {
  app: {
    color: universeTheme.palette.textColor,
    backgroundColor: universeTheme.palette.canvasColor,
    fontSize: universeTheme.fontSize
  },
  header: {
    backgroundColor: '#0a0a0c',
    textAlign: 'center',
    borderBottom: `1px solid ${universeTheme.palette.borderColor}`
  },
  main: {
    padding: 10,
    maxWidth: 990,
    width: '100%',
    margin: '0 auto'
  }
};

export default class ProjectLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(universeTheme)}>
        <div className="app" id="app" style={styles.app}>
          <header style={styles.header}>
            <Navigation
              items={[
                {
                  icon: HomeIcon,
                  label: 'Home',
                  path: '/'
                },
                {
                  icon: HomeIcon,
                  label: 'Ranking',
                  path: '/ranking'
                }
              ]}
            />
          </header>
          <main style={styles.main}>
            <ErrorBoundary>{this.props.children}</ErrorBoundary>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

ProjectLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
