import React, { Component } from 'react';

import PropTypes from 'prop-types';
import TreeTrophy from '../TreeTrophy';

const styles = {
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxHeight: 450,
    overflowY: 'auto'
  }
};

class TreeTrophies extends Component {
  render() {
    const { trophyHunter, style } = this.props;

    if (!trophyHunter || !trophyHunter.treeTrophyNamesObtained) {
      return <div />;
    }

    return (
      <div style={style}>
        <div>Completed Trees</div>
        <div style={styles.items}>
          {trophyHunter.treeTrophyNamesObtained &&
            trophyHunter.treeTrophyNamesObtained.map(treeTrophyName => {
              return (
                <TreeTrophy
                  key={treeTrophyName}
                  progress={1}
                  size={40}
                  style={{ margin: '8px' }}
                  treeTrophyName={treeTrophyName}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

TreeTrophies.propTypes = {
  trophyHunter: PropTypes.object,
  style: PropTypes.object
};

export default TreeTrophies;
