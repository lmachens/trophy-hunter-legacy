import { Button, TextField } from '../../components/generic';

import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

const styles = {
  hint: {
    color: 'rgb(117, 117, 117)'
  }
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loading: false,
      error: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit = event => {
    const { history } = this.props;
    event.preventDefault();
    this.setState({
      error: false,
      loading: true
    });

    Meteor.loginWithPassword(this.state.username, this.state.password, error => {
      if (!error) {
        history.push('/');
      } else {
        this.setState({
          error: true,
          loading: false
        });
        console.log(error);
      }
    });
  };

  handleUsernameChange(event) {
    event.preventDefault();

    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    event.preventDefault();

    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ margin: '100px', textAlign: 'center' }}>
        <TextField
          floatingLabelStyle={styles.hint}
          floatingLabelText="Username"
          onChange={this.handleUsernameChange}
          value={this.state.username}
        />
        <br />
        <TextField
          floatingLabelStyle={styles.hint}
          floatingLabelText="Password"
          onChange={this.handlePasswordChange}
          type="password"
          value={this.state.password}
        />
        <br />
        {this.state.error && <p style={{ color: 'rgb(244, 67, 54)' }}>Login failed</p>}
        <Button disabled={this.state.loading} label="Login" onClick={this.handleSubmit} />
      </form>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(LoginPage);
