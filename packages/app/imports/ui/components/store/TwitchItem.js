import { Checkbox, TextField } from '../generic';
import React, { PureComponent } from 'react';
import { VisibilityIcon, VisibilityOffIcon } from '../icons';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

class TwitchItem extends PureComponent {
  state = {
    name: this.props.twitch ? this.props.twitch.name : '',
    visible: this.props.twitch ? this.props.twitch.visible : true
  };

  isValid = () => {
    return !!this.state.name;
  };

  handleChange = event => {
    this.setState(
      {
        name: event.target.value
      },
      this.setParentState
    );
  };

  handleVisibleChecked = (event, isInputChecked) => {
    this.setState(
      {
        visible: isInputChecked
      },
      this.setParentState
    );
  };

  setParentState = () => {
    const { name, visible } = this.state;
    const { onChange } = this.props;

    const valid = this.isValid();
    onChange({ name, visible }, valid);
  };

  render() {
    const { name, visible } = this.state;

    const isVisible = name && visible;

    return (
      <div>
        <p>
          Share you Twitch channel with other Trophy Hunters!
          <br />
          The link is visible in your profile and in the ranking.
          <br />
          Online streams are visible in the <b>Live Streams</b> section of the sidebar.
          <br />
          Please make sure, that the Trophy Hunter app and overlay are visible in your stream.
          <br />
          Here is a{' '}
          <a href="https://youtu.be/hkfzE3dvUF8" rel="noopener noreferrer" target="_blank">
            video guide
          </a>{' '}
          for you (thx @NotACleverWolf).
        </p>
        <div>
          <img
            onClick={() => isVisible && window.open(`https://www.twitch.tv/${name}`)}
            src="/images/twitch_small.png"
            style={{
              marginLeft: '6px',
              height: '40px',
              width: '40px',
              cursor: isVisible ? 'pointer' : null,
              filter: isVisible ? null : 'grayscale(1.0)'
            }}
          />
        </div>
        <span>https://www.twitch.tv/</span>
        <TextField
          hintText="Channel name"
          onChange={this.handleChange}
          underlineStyle={!name ? { borderColor: 'rgb(244, 67, 54)' } : {}}
          value={name}
        />
        <Checkbox
          checked={visible}
          checkedIcon={<VisibilityIcon />}
          label={visible ? 'Link is visible' : 'Link is not visible'}
          onCheck={this.handleVisibleChecked}
          style={{
            textAlign: 'left',
            margin: '0 auto',
            whiteSpace: 'nowrap',
            width: 'initial'
          }}
          uncheckedIcon={<VisibilityOffIcon />}
        />
      </div>
    );
  }
}

TwitchItem.propTypes = {
  twitch: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return { twitch: get(trophyHunter, 'items.twitch') };
};

export default connect(mapStateToProps)(TwitchItem);
