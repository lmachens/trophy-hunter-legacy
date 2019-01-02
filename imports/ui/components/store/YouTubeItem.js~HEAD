import { Checkbox, MenuItem, SelectField, TextField } from '../generic';
import React, { PureComponent } from 'react';
import { VisibilityIcon, VisibilityOffIcon } from '../icons';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

class YouTubeItem extends PureComponent {
  state = {
    name: this.props.youTube ? this.props.youTube.name : '',
    type: this.props.youTube ? this.props.youTube.type : 'channel',
    visible: this.props.youTube ? this.props.youTube.visible : true
  };

  autoClose = true;

  isValid = () => {
    return !!this.state.name && !!this.state.type;
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

  handleTypeChange = (event, index, value) => {
    this.setState(
      {
        type: value
      },
      this.setParentState
    );
  };

  setParentState = () => {
    const { name, type, visible } = this.state;
    const { onChange } = this.props;

    const valid = this.isValid();
    onChange({ name, type, visible }, valid);
  };

  render() {
    const { name, type, visible } = this.state;

    const isVisible = name && visible;

    return (
      <div>
        <p>
          Share you YouTube channel with other Trophy Hunters!
          <br />
          The link is visible in your profile and in the ranking.
          <br />
          Please make sure, that the Trophy Hunter app and overlay are visible in your videos.
        </p>
        <div>
          <img
            onClick={() => isVisible && window.open(`https://www.youtube.com/${type}/${name}`)}
            src="/images/youTube_small.png"
            style={{
              marginLeft: '6px',
              height: '40px',
              width: '40px',
              cursor: isVisible ? 'pointer' : null,
              filter: isVisible ? null : 'grayscale(1.0)'
            }}
          />
        </div>
        <span>https://www.youtube.com/</span>
        <SelectField
          onChange={this.handleTypeChange}
          style={{
            verticalAlign: 'bottom',
            width: '112px'
          }}
          value={type}
        >
          <MenuItem primaryText="channel" value={'channel'} />
          <MenuItem primaryText="user" value={'user'} />
        </SelectField>
        <span>/</span>
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

YouTubeItem.propTypes = {
  youTube: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return { youTube: get(trophyHunter, 'items.youTube') };
};

export default connect(mapStateToProps)(YouTubeItem);
