import React, { Component } from 'react';
import { getChampionAbility, getPassiveAbility } from '../../../api/riot-api/staticData';

import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import { Switch } from '../generic';
import get from 'lodash.get';
import universeTheme from '../../layouts/universeTheme';
import { withChampionStats } from '../../hocs/withChampionStats';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  background: {
    position: 'absolute',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  foreground: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  table: {
    fontSize: 'xx-small',
    borderSpacing: '3px 0',
    marginTop: 4
  },
  col: {
    width: '18px'
  },
  image: {
    width: '16px',
    height: '16px',
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

class SkillOrder extends Component {
  state = {
    set: 'highestCount' || this.props.setValue
  };

  UNSAFE_componentWillReceiveProps(props) {
    if (props.setValue) {
      this.setState({ set: props.setValue });
    }
  }

  handleToggle = (event, isInputChecked) => {
    this.setState({
      set: isInputChecked ? 'highestCount' : 'highestWinrate'
    });
  };

  render() {
    const {
      champion,
      championStatsByChampionId,
      hideBackground,
      role,
      style,
      setValue
    } = this.props;
    const { set } = this.state;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];
    const skillOrderStats = roleStats && roleStats.skillOrder && roleStats.skillOrder[set];

    const backgroundStyle = Object.assign(
      {
        backgroundImage: `url(//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.key}_2.jpg)`,
        filter: universeTheme.boxBackground.filter,
        opacity: universeTheme.boxBackground.opacity
      },
      styles.background
    );

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <div style={!hideBackground ? backgroundStyle : {}} />
        <div style={styles.foreground}>
          <Tooltip
            title={
              <TooltipTitle
                content={
                  <span>
                    Analysed matches: {skillOrderStats ? skillOrderStats.count : 0}
                    <br />
                    Winrate:{' '}
                    {skillOrderStats ? `${(skillOrderStats.winRate * 100).toFixed(2)}%` : '-'}
                  </span>
                }
                title={
                  set === 'highestCount'
                    ? 'Most Frequent Starting Build'
                    : 'Most Winning Starting Build'
                }
              />
            }
          >
            <div style={styles.label}>
              {set === 'highestCount' ? 'Most Frequent Skill Order' : 'Most Winning Skill Order'}
            </div>
          </Tooltip>
          {!setValue && (
            <Switch
              onToggle={this.handleToggle}
              style={styles.toggle}
              toggled={set === 'highestCount'}
            />
          )}
          {this.renderSkillOrder()}
        </div>
      </div>
    );
  }

  renderSkillOrder() {
    const { champion, championStatsByChampionId, role } = this.props;
    const { set } = this.state;

    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];
    if (!roleStats || !roleStats.skillOrder || !roleStats.skillOrder[set]) {
      return <div>Not available</div>;
    }

    return (
      <table style={styles.table}>
        <thead>
          <tr>
            <th>
              {champion.passive && (
                <Tooltip
                  title={
                    <TooltipTitle
                      content={champion.passive.sanitizedDescription}
                      title={champion.passive.name}
                    />
                  }
                >
                  <img src={getPassiveAbility(champion.passive.image.full)} style={styles.image} />
                </Tooltip>
              )}
            </th>
            {[...Array(18)].map((x, i) => (
              <th key={i + 1} style={styles.col}>
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['Q', 'W', 'E', 'R'].map((char, index) => (
            <tr key={char}>
              <td>
                <Tooltip
                  title={
                    <TooltipTitle
                      content={
                        <div>
                          <span key="description">
                            {champion.spells[index].sanitizedDescription}
                          </span>
                          {champion.spells[index].cooldownBurn && (
                            <span>
                              <br />
                              Cooldown: {champion.spells[index].cooldownBurn}
                            </span>
                          )}
                        </div>
                      }
                      title={champion.spells[index].name}
                    />
                  }
                >
                  <img
                    src={getChampionAbility(champion.spells[index].image.full)}
                    style={styles.image}
                  />
                </Tooltip>
              </td>
              {[...Array(18)].map((x, i) => (
                <td key={`${char}${i + 1}`} style={styles.col}>
                  {roleStats.skillOrder[set].order[i] === char ? char : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

SkillOrder.propTypes = {
  champion: PropTypes.object,
  hideBackground: PropTypes.bool,
  role: PropTypes.string,
  style: PropTypes.object,
  setValue: PropTypes.string,
  championStatsByChampionId: PropTypes.object.isRequired
};

export default withChampionStats(SkillOrder);
