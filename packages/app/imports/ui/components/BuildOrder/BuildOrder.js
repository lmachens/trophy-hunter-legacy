import React, { Component } from 'react';

import { HardwareKeyboardArrowRightIcon } from '../icons';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';
import get from 'lodash.get';
import { getItem } from '../../../api/riot-api/staticData';
import riotItems from '/imports/shared/riot-api/items.ts';
import { withChampionStats } from '../../hocs/withChampionStats';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  foreground: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  item: {
    width: '36px',
    height: '36px',
    verticalAlign: 'sub'
  },
  toggle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 'initial'
  },
  label: {
    margin: 2
  }
};

export class BuildOrder extends Component {
  render() {
    const { champion, championStatsByChampionId, role, style, setValue } = this.props;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];
    const firstItemsStats = roleStats && roleStats.firstItems && roleStats.firstItems[setValue];
    const finalItemsStats = roleStats && roleStats.finalItems && roleStats.finalItems[setValue];

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <div style={styles.foreground}>
          <Tooltip
            title={
              <TooltipTitle
                content={
                  <span>
                    Analysed matches: {firstItemsStats ? firstItemsStats.count : 0}
                    <br />
                    Winrate:{' '}
                    {firstItemsStats ? `${(firstItemsStats.winRate * 100).toFixed(2)}%` : '-'}
                    <br />
                    <br />
                    Thx to Champion.gg!
                  </span>
                }
                title={
                  setValue === 'highestCount'
                    ? 'Most Frequent Starting Build'
                    : 'Most Winning Starting Build'
                }
              />
            }
          >
            <div style={styles.label}>Starting Build</div>
          </Tooltip>
          {this.renderFirstItems()}
          <Tooltip
            title={
              <TooltipTitle
                content={
                  <span>
                    Analysed matches: {finalItemsStats ? finalItemsStats.count : 0}
                    <br />
                    Winrate:{' '}
                    {finalItemsStats ? `${(finalItemsStats.winRate * 100).toFixed(2)}%` : '-'}
                    <br />
                    <br />
                    Thx to Champion.gg!
                  </span>
                }
                title={
                  setValue === 'highestCount'
                    ? 'Most Frequent Final Build'
                    : 'Most Winning Final Build'
                }
              />
            }
          >
            <div style={styles.label}>Final Build</div>
          </Tooltip>
          {this.renderFinalItems()}
        </div>
      </div>
    );
  }

  renderFirstItems() {
    const { champion, championStatsByChampionId, role, setValue } = this.props;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];
    if (!roleStats || !roleStats.firstItems || !roleStats.firstItems[setValue]) {
      return <div>Not available</div>;
    }

    return (
      <div>
        {roleStats.firstItems[setValue].items.map((item, index) => (
          <span key={`firstItems${index}`}>
            {index > 0 && <HardwareKeyboardArrowRightIcon />}
            <Tooltip
              title={
                <TooltipTitle
                  content={riotItems[item] && riotItems[item].sanitizedDescription}
                  title={riotItems[item] && riotItems[item].name}
                />
              }
            >
              <img src={getItem(`${item}.png`)} style={styles.item} />
            </Tooltip>
          </span>
        ))}
      </div>
    );
  }

  renderFinalItems() {
    const { champion, championStatsByChampionId, role, setValue } = this.props;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];
    if (!roleStats || !roleStats.finalItems || !roleStats.finalItems[setValue]) {
      return <div>Not available</div>;
    }

    return (
      <div>
        {roleStats.finalItems[setValue].items.map((item, index) => (
          <span key={`items${index}`}>
            {index > 0 && <HardwareKeyboardArrowRightIcon />}
            <Tooltip
              title={
                <TooltipTitle
                  content={riotItems[item] && riotItems[item].sanitizedDescription}
                  title={riotItems[item] && riotItems[item].name}
                />
              }
            >
              <img src={getItem(`${item}.png`)} style={styles.item} />
            </Tooltip>
          </span>
        ))}
      </div>
    );
  }
}

BuildOrder.propTypes = {
  champion: PropTypes.object,
  role: PropTypes.string,
  style: PropTypes.object,
  setValue: PropTypes.string,
  championStatsByChampionId: PropTypes.object.isRequired
};

export default withChampionStats(BuildOrder);
