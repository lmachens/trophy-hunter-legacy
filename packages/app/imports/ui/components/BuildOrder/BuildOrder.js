import React, { Component } from 'react';
import HardwareKeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import HardwareKeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';
import get from 'lodash.get';
import { getItem } from '../../../api/riot-api/staticData';
import riotItems from '/imports/shared/riot-api/items.ts';
import { withChampionStats } from '../../hocs/withChampionStats';
import { TooltipTitle } from '../generic/TooltipTitle';
import universeTheme from '../../layouts/universeTheme';

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
    verticalAlign: 'sub',
    margin: '0px 4px'
  },
  toggle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 'initial'
  },
  label: {
    margin: 2
  },
  leftArrow: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    padding: 0,
    height: 24,
    width: 24,
    color: universeTheme.palette.textColor
  },
  rightArrow: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    padding: 0,
    height: 24,
    width: 24,
    color: universeTheme.palette.textColor
  }
};

const ranges = ['2-12', '12-22', '22-32', '32-42', '42-52'];

export class BuildOrder extends Component {
  state = {
    range: ranges[0]
  };

  render() {
    const { champion, championStatsByChampionId, role, style, setValue } = this.props;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];
    const firstItemsStats = roleStats && roleStats.firstItems && roleStats.firstItems[setValue];

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
          <IconButton
            onClick={() => {
              this.setState({
                range:
                  ranges.indexOf(this.state.range) === 0
                    ? ranges[ranges.length - 1]
                    : ranges[ranges.indexOf(this.state.range) - 1]
              });
            }}
            style={styles.leftArrow}
          >
            <HardwareKeyboardArrowLeftIcon />
          </IconButton>
          <Tooltip
            title={
              <TooltipTitle
                content={`These items are good to buy between ${this.state.range} minutes`}
                title={setValue === 'highestCount' ? 'Most Frequent Items' : 'Most Winning Items'}
              />
            }
          >
            <div style={styles.label}>Items between {this.state.range} minutes</div>
          </Tooltip>
          <IconButton
            onClick={() => {
              this.setState({
                range:
                  ranges.indexOf(this.state.range) >= ranges.length - 1
                    ? ranges[0]
                    : ranges[ranges.indexOf(this.state.range) + 1]
              });
            }}
            style={styles.rightArrow}
          >
            <HardwareKeyboardArrowRightIcon />
          </IconButton>
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
          <Tooltip
            key={`firstItems${index}`}
            title={
              <TooltipTitle
                content={riotItems[item] && riotItems[item].sanitizedDescription}
                title={riotItems[item] && riotItems[item].name}
              />
            }
          >
            <img src={getItem(`${item}.png`)} style={styles.item} />
          </Tooltip>
        ))}
      </div>
    );
  }

  renderFinalItems() {
    const { champion, championStatsByChampionId, role, setValue } = this.props;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];
    if (!roleStats || !roleStats.items || !roleStats.items[setValue]) {
      return <div>Not available</div>;
    }

    return (
      <div>
        {roleStats.items[setValue][this.state.range].map((item, index) => (
          <Tooltip
            key={`items${index}`}
            title={
              <TooltipTitle
                content={
                  <span>
                    {riotItems[item.itemId] && riotItems[item.itemId].sanitizedDescription}
                    <br />
                    Analysed matches: {item.count}
                    <br />
                    Winrate: {(item.winRate * 100).toFixed(2)}%
                  </span>
                }
                title={riotItems[item.itemId] && riotItems[item.itemId].name}
              />
            }
          >
            <img src={getItem(`${item.itemId}.png`)} style={styles.item} />
          </Tooltip>
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
