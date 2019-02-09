import PropTypes from 'prop-types';
import React from 'react';
import TreeItem from '../TreeItem';
import trophies from '/imports/shared/trophies/index.ts';

class Tree extends React.Component {
  render() {
    const { tree, trophyHunter, style } = this.props;

    const trophyNames = tree.leaves.map(trophy => {
      return trophy.trophyName;
    });
    const treeTrophies = trophyNames.map(trophyName => trophies[trophyName]);

    const localStyle = Object.assign({ position: 'relative' }, style);
    return (
      <div style={localStyle}>
        {tree.leaves.map(leaf => {
          const parents = leaf.parents.map(parent => {
            return tree.leaves.find(leaf => leaf.trophyName === parent);
          });

          const trophy = treeTrophies.find(treeTrophy => treeTrophy.name === leaf.trophyName);
          return (
            <TreeItem
              col={leaf.x}
              key={leaf.trophyName}
              parents={parents}
              row={leaf.y}
              tree={tree}
              trophy={trophy}
              trophyHunter={trophyHunter}
            />
          );
        })}
      </div>
    );
  }
}

Tree.propTypes = {
  loading: PropTypes.bool,
  tree: PropTypes.object.isRequired,
  trophyHunter: PropTypes.object,
  style: PropTypes.object
};

export default Tree;
