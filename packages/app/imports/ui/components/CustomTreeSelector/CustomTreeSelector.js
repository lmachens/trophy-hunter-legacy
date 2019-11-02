import { Button, Popover } from '../generic';
import React, { Fragment, PureComponent } from 'react';

import HelpBox from '../HelpBox';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import TreeTrophy from '../TreeTrophy';
import { expiredTrees } from '/imports/shared/trees/index.ts';
import universeTheme from '../../layouts/universeTheme';

class CustomTreeSelector extends PureComponent {
  state = {
    open: false
  };

  handleClick = event => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleTreeClick = treeName => () => {
    const { onChange } = this.props;
    Meteor.call('changeCustomTree', treeName, () => {
      onChange(expiredTrees[treeName])();
    });
    this.setState({
      open: false
    });
  };

  render() {
    const { trophyHunter, style } = this.props;
    const { anchorEl, open } = this.state;

    const trees = Object.keys(expiredTrees)
      .sort()
      .map(treeName => {
        const trophyHunterTree = (trophyHunter && trophyHunter.trees[treeName]) || { progress: 0 };
        return (
          <TreeTrophy
            key={treeName}
            onClick={this.handleTreeClick(treeName)}
            progress={trophyHunterTree.progress}
            size={40}
            style={{ margin: 4, display: 'inline-block' }}
            treeTrophyName={treeName}
          />
        );
      });
    return (
      <Fragment>
        <Button label="Change" onClick={this.handleClick} primary={true} style={style} />
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
          open={open}
          style={Object.assign(
            { width: 740, padding: 10, textAlign: 'center' },
            universeTheme.popover
          )}
          targetOrigin={{ horizontal: 'left', vertical: 'center' }}
        >
          <HelpBox>
            You can select one additional tree from previous months to get the active quest bonus
            and completed trees trophies.
          </HelpBox>
          {trees}
        </Popover>
      </Fragment>
    );
  }
}

CustomTreeSelector.propTypes = {
  trophyHunter: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default CustomTreeSelector;
