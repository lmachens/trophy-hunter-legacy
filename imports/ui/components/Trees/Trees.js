import React, { Component } from 'react';
import trees, { activeTrees, treeBonus } from '../../../api/trees/trees';

import ActiveQuests from '../ActiveQuests';
import CustomTreeSelector from '../CustomTreeSelector';
import HelpBox from '../help/HelpBox';
import PropTypes from 'prop-types';
import Tree from '../_Tree';
import TreeTrophies from '../TreeTrophies';
import TreeTrophy from '../TreeTrophy';
import { connect } from 'react-redux';

const styles = {
  treeTrophies: {
    position: 'absolute',
    right: 10,
    width: 140,
    zIndex: 2
  }
};
class Trees extends Component {
  state = {
    activeTree: activeTrees[Object.keys(activeTrees)[0]]
  };

  handleTreeClick = tree => () => {
    if (tree.name !== 'placeholder') {
      this.setState({
        activeTree: tree
      });
    }
  };

  render() {
    const { trophyHunter } = this.props;
    const { activeTree } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center'
        }}
      >
        <HelpBox>
          In this section you find the <b>monthly trees</b>. A <b>monthly tree</b> is a collection
          of certain trophies that grant you extra points if you collect them in the given order. If
          you manage to collect all trophies in this month, you will obtain extra points and a tree
          trophy.Bonus points by number of completed trees:
          <br />
          {Object.entries(treeBonus).map(([number, bonus]) => (
            <span key={number}>
              {number}: <b>{bonus}</b>{' '}
            </span>
          ))}
          <br />
          The last tree makes it possible to play old trees.
        </HelpBox>
        <TreeTrophies style={styles.treeTrophies} trophyHunter={trophyHunter} />
        {this.renderChampions()}
        <Tree
          style={{ height: 260, width: 660, margin: 20 }}
          tree={activeTree}
          trophyHunter={trophyHunter}
        />
        <ActiveQuests style={{ maxWidth: 800 }} trophyHunter={trophyHunter} />
      </div>
    );
  }

  renderChampions() {
    const { trophyHunter, userId } = this.props;
    const { activeTree } = this.state;
    const trophyHunterTrees = Object.keys(activeTrees);
    const customTree = (trophyHunter && trophyHunter.customTree) || 'placeholder';
    trophyHunterTrees.push(customTree);
    const isOwnTrophyHunter = trophyHunter && userId && trophyHunter.userId === userId;

    const treesChampions = trophyHunterTrees.map(name => {
      const tree = trees[name];
      const trophyHunterTree = (trophyHunter && trophyHunter.trees[name]) || {
        progress: 0
      };
      const isActiveTree = activeTree.name === name;
      let avatarStyle;
      if (!isActiveTree) {
        avatarStyle = Object.assign({
          filter: 'grayscale(100%)'
        });
      }

      return (
        <TreeTrophy
          avatarStyle={avatarStyle}
          key={tree.name}
          onClick={this.handleTreeClick(tree)}
          progress={trophyHunterTree.progress}
          style={{ margin: '8px 16px' }}
          treeTrophyName={tree.name}
        />
      );
    });

    return (
      <div style={{ textAlign: 'center', marginTop: '2px', position: 'relative' }}>
        {treesChampions}
        {isOwnTrophyHunter && (
          <CustomTreeSelector
            onChange={this.handleTreeClick}
            style={{ position: 'absolute', bottom: -30, right: 0 }}
            trophyHunter={trophyHunter}
          />
        )}
      </div>
    );
  }
}

Trees.propTypes = {
  trophyHunter: PropTypes.object,
  userId: PropTypes.string
};

const mapStateToProps = ({ account: { userId } }) => {
  return { userId };
};

const enhanced = connect(mapStateToProps)(Trees);

export default enhanced;
