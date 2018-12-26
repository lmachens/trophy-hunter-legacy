import trees, { treeBonus } from '../../../api/trees/trees';

import PropTypes from 'prop-types';
import React from 'react';
import TreeTrophy from './TreeTrophy';

const getPostCount = count => {
  let post;
  if (count === 1) post = 'st';
  else if (count === 2) post = 'nd';
  else if (count === 3) post = 'rd';
  else post = 'th';
  return `${count}${post}`;
};

const TreeComplete = ({ count, name }) => {
  if (count) {
    return (
      <div>
        <TreeTrophy progress={1} treeTrophyName={name} />
        <p>
          Congratulations Hunter! You completed <b>{trees[name].title}</b>!
          <br />
          This is the <b>{getPostCount(count)}</b> tree you completed this month.
        </p>
        <p>
          You collected a tree trophy and earned <b>{treeBonus[count]}</b> additional points.
          <br />
          {Object.entries(treeBonus).map(([number, bonus]) => (
            <span key={number}>
              <br />
              {number} trees: <b>{bonus}</b> points
            </span>
          ))}
        </p>
      </div>
    );
  }
  return (
    <div>
      <TreeTrophy progress={1} treeTrophyName={name} />
      <p>
        Congratulations Hunter! You completed <b>{trees[name].title}</b>!
      </p>
      <p>You collected a tree trophy.</p>
    </div>
  );
};

TreeComplete.propTypes = {
  count: PropTypes.number,
  name: PropTypes.string.isRequired
};

export default TreeComplete;
