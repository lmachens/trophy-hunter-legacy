import riotItems, { stackableItems } from '/imports/shared/riot-api/items.ts';

import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from '../generic/Tooltip';
import { getItem } from '../../../api/riot-api/staticData';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  item: {
    display: 'inline-block',
    marginRight: '4px',
    width: '24px',
    height: '24px',
    backgroundColor: '#2b2b2b',
    position: 'relative'
  }
};

const Items = ({ stats }) => {
  const items = [];
  for (let i = 0; i < 7; i++) {
    const key = `item${i}`;
    if (stats[key]) {
      items.push(
        <div key={`${key}-i`} style={styles.item}>
          <Tooltip
            title={
              <TooltipTitle
                content={riotItems[stats[key]] && riotItems[stats[key]].sanitizedDescription}
                title={riotItems[stats[key]] && riotItems[stats[key]].name}
              />
            }
          >
            <img src={getItem(`${stats[key]}.png`)} style={{ width: '100%', height: '100%' }} />
          </Tooltip>
          {stats[`item${i}count`] && stackableItems.includes(stats[key]) && (
            <span
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
              }}
            >
              x{stats[`item${i}count`]}
            </span>
          )}
        </div>
      );
    } else {
      items.push(
        <div
          key={key}
          style={{
            display: 'inline-block',
            marginRight: '4px',
            width: '24px',
            height: '24px',
            backgroundColor: '#2b2b2b'
          }}
        >
          <div style={{ width: '100%', height: '100%' }} />
        </div>
      );
    }
  }

  return <div>{items}</div>;
};

Items.propTypes = {
  stats: PropTypes.object.isRequired
};

export default Items;
