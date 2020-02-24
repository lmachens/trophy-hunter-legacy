import React, { PureComponent } from 'react';

import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import get from 'lodash.get';
import { RoleImage } from './_RoleImage';

const roles = ['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'];

class RoleMenu extends PureComponent {
  handleRoleClick = role => () => {
    const { onSelect } = this.props;
    onSelect(role);
  };

  render() {
    const { availableRoles, anchorEl, onClose, selectedRole } = this.props;

    return (
      <Menu anchorEl={anchorEl} id="role-menu" onClose={onClose} open={Boolean(anchorEl)}>
        {roles.map(role => (
          <RoleImage
            disabled={!availableRoles.includes(role)}
            isSelected={role === selectedRole}
            key={role}
            onClick={this.handleRoleClick(role)}
            role={role}
          />
        ))}
      </Menu>
    );
  }
}

RoleMenu.propTypes = {
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  selectedRole: PropTypes.string,
  availableRoles: PropTypes.array
};

const mapStateToProps = ({ championStatsByChampionId }, { championId }) => {
  const championStats = get(championStatsByChampionId, `${championId}.stats`) || {};
  const availableRoles = Object.keys(championStats);
  return { availableRoles };
};

const enhanced = connect(mapStateToProps)(RoleMenu);

export { enhanced as RoleMenu };
