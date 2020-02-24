import React, { PureComponent } from 'react';

import AvatarWithStatus from '../AvatarWithStatus';
import { IconButton } from '../generic';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaults from 'lodash.defaults';

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    height: 100
  },
  avatar: {
    margin: 5,
    padding: 0
  }
};

const borderRadii = [
  '50%',
  '25%',
  '15%/30%',
  '30%/15%',
  '10% 40% 10%',
  '40% 10% 40%',
  '30% 30% 0% 0%',
  '0% 0% 30% 30%'
];

const borderColors = [
  '#c4b998',
  '#937341',
  'bisque',
  'brown',
  'coral',
  'red',
  '#8cca4f',
  'green',
  '#41c1c1',
  'darkcyan',
  'rgb(109, 112, 216)',
  'purple'
];

class AvatarItem extends PureComponent {
  state = {
    avatar: (this.props.trophyHunter && this.props.trophyHunter.items.avatar) || {
      borderColor: '#c4b998',
      borderRadius: '50%'
    }
  };

  isValid = () => {
    return !!this.state.avatar;
  };

  handleBorderRadiusTapped = borderRadius => {
    this.setState(prevState => {
      const avatar = Object.assign({}, prevState.avatar);
      avatar.borderRadius = borderRadius;
      return { avatar };
    }, this.setParentState);
  };

  handleBorderColorTapped = borderColor => {
    this.setState(prevState => {
      const avatar = Object.assign({}, prevState.avatar);
      avatar.borderColor = borderColor;
      return { avatar };
    }, this.setParentState);
  };

  setParentState = () => {
    const { avatar } = this.state;
    const { onChange } = this.props;

    const valid = this.isValid();
    onChange(avatar, valid);
  };

  render() {
    const { trophyHunter } = this.props;
    const { avatar } = this.state;

    return (
      <div>
        Select a shape
        <div style={styles.section}>
          {borderRadii.map((borderRadius, index) => {
            const tempTrophyHunter = defaults(
              {
                items: {
                  avatar: {
                    borderRadius,
                    borderColor: avatar.borderColor
                  }
                }
              },
              trophyHunter
            );

            return (
              <IconButton
                key={index}
                onClick={() => this.handleBorderRadiusTapped(borderRadius)}
                style={styles.avatar}
              >
                <AvatarWithStatus trophyHunter={tempTrophyHunter} />
              </IconButton>
            );
          })}
        </div>
        Select a color
        <div style={styles.section}>
          {borderColors.map((borderColor, index) => {
            const tempTrophyHunter = defaults(
              {
                items: {
                  avatar: {
                    borderColor,
                    borderRadius: avatar.borderRadius
                  }
                }
              },
              trophyHunter
            );

            return (
              <IconButton
                key={index}
                onClick={() => this.handleBorderColorTapped(borderColor)}
                style={styles.avatar}
              >
                <AvatarWithStatus trophyHunter={tempTrophyHunter} />
              </IconButton>
            );
          })}
        </div>
      </div>
    );
  }
}

AvatarItem.propTypes = {
  trophyHunter: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return { trophyHunter };
};

export default connect(mapStateToProps)(AvatarItem);
