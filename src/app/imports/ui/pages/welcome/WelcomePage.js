import React, { Component } from 'react';

const styles = {
  logo: {
    maxWidth: '100%'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default class WelcomePage extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <img alt="Logo" src="/images/logo_400_400.png" style={styles.logo} />
        <div style={styles.inputContainer}>In Progress</div>
      </div>
    );
  }
}
