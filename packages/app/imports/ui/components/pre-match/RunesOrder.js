import React, { Component } from 'react';

import BuildAndSkill from './BuildAndSkill';
import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import { Switch } from '../generic';
import get from 'lodash.get';
import { getPerkImage, getUnknown } from '../../../api/riot-api/staticData';
import perkStyles from '/imports/shared/riot-api/perk-styles.ts';
import perks from '/imports/shared/riot-api/perks.ts';
import { withChampionStats } from '../../hocs/withChampionStats';
import { TooltipTitle } from '../generic/TooltipTitle';
import shards from '/imports/shared/riot-api/shards.ts';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  rune: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    margin: 2
  },
  toggle: {
    width: 'initial',
    margin: '0 auto'
  },
  imageContainer: {
    width: 50,
    margin: '0 10px'
  },
  shardContainer: {
    margin: '0 10px',
    width: 50
  },
  shardImage: {
    height: 32
  },
  runeImage: {
    height: 50
  },
  name: {
    margin: '6px 0'
  },
  shardName: {
    margin: '9px 0'
  },
  desc: {
    textAlign: 'left',
    flex: 1
  },
  text: {
    margin: '6px 0',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },
  runesContainer: {
    flex: 1,
    display: 'flex'
  },
  runes: {
    flex: 1
  }
};

const Rune = ({ rune }) => {
  const perk = perks[rune] || perkStyles[rune];
  return (
    <div style={styles.rune}>
      <div style={styles.imageContainer}>
        <img
          src={perk && perk.icon ? getPerkImage(perk.icon) : getUnknown()}
          style={styles.runeImage}
        />
      </div>
      {perk && (
        <div style={styles.desc}>
          <h3 style={styles.name}>{perk.name}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: perk.shortDesc || perk.tooltip }}
            style={styles.text}
          />
        </div>
      )}
    </div>
  );
};

Rune.propTypes = {
  rune: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string
};

const Shard = ({ id }) => {
  const shard = shards[id];
  return (
    <div style={styles.rune}>
      <div style={styles.shardContainer}>
        <img src={(shard && shard.icon) || getUnknown()} style={styles.shardImage} />
      </div>
      {shard && (
        <div style={styles.desc}>
          <h4 style={styles.shardName}>
            {shard.name} ({shard.shortDesc})
          </h4>
        </div>
      )}
    </div>
  );
};

Shard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

class RunesOrder extends Component {
  state = {
    set: 'highestCount'
  };

  handleToggle = (event, isInputChecked) => {
    this.setState({
      set: isInputChecked ? 'highestCount' : 'highestWinrate'
    });
  };

  render() {
    const { champion, championStatsByChampionId, role } = this.props;
    const { set } = this.state;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];

    const runesOrderStats = roleStats && roleStats.runes && roleStats.runes[set];

    return (
      <div>
        <Switch
          data-for="guideTooltip"
          data-tip=""
          label={set === 'highestCount' ? 'Most Frequent' : 'Most Winning'}
          labelStyle={{ width: 'initial' }}
          onToggle={this.handleToggle}
          style={styles.toggle}
          toggled={set === 'highestCount'}
        />
        <div style={styles.container}>
          <div style={styles.runes}>
            <Tooltip
              title={
                <TooltipTitle
                  content={
                    <span>
                      Analysed matches: {runesOrderStats ? runesOrderStats.count : 0}
                      <br />
                      Winrate:{' '}
                      {runesOrderStats ? `${(runesOrderStats.winRate * 100).toFixed(2)}%` : '-'}
                    </span>
                  }
                  title={set === 'highestCount' ? 'Most Frequent Runes' : 'Most Winning Runes'}
                />
              }
            >
              <div style={styles.label}>Runes</div>
            </Tooltip>
            <div style={styles.runesContainer}>
              {!runesOrderStats && 'No Data available'}
              {runesOrderStats && (
                <div style={styles.runes}>
                  <Rune rune={parseInt(parseInt(runesOrderStats.order[0]) / 100) * 100} />
                  {runesOrderStats.order.slice(0, 4).map((rune, i) => (
                    <Rune key={i} rune={rune} />
                  ))}
                  {runesOrderStats.order.slice(7, 10).map((id, i) => (
                    <Shard id={parseInt(id)} key={i} />
                  ))}
                </div>
              )}
              {runesOrderStats && (
                <div style={styles.runes}>
                  {runesOrderStats.order.slice(4, 7).map((rune, i) => (
                    <Rune key={i} rune={parseInt(rune)} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <BuildAndSkill champion={champion} role={role} setValue={set} />
        </div>
      </div>
    );
  }
}

RunesOrder.propTypes = {
  champion: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
  championStatsByChampionId: PropTypes.object.isRequired
};

export default withChampionStats(RunesOrder);
