import 'rc-slider/assets/index.css';

import React, { Component } from 'react';
import {
  additionalItems,
  stackableItems,
  transformableItems
} from '/imports/shared/riot-api/items.ts';

import ActionMap from '../ActionMap';
import BannedChampions from '../BannedChampions';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';
import TimelineParticipant from '../TimelineParticipant';
import champions from '/imports/shared/riot-api/champions.ts';
import universeTheme from '../../layouts/universeTheme';

const styles = {
  teams: {
    display: 'flex',
    fontSize: '1.2em'
  },
  teamsStats: {
    flex: 1,
    margin: 10,
    textAlign: 'center'
  },
  map: {
    margin: '0 6px'
  },
  teamStatistic: {
    display: 'inline-block',
    width: 100
  }
};

const PERFECT_TIMING = 8313;
const COMMENCING_STOPWATCH = 2419;
const STOPWATCH = 2420;
const EYE_OF_THE_HERALD = 3513;

const hasStopwatch = participant => {
  const { perk0, perk1, perk2, perk3, perk4, perk5 } = participant.stats;
  return (
    perk0 === PERFECT_TIMING ||
    perk1 === PERFECT_TIMING ||
    perk2 === PERFECT_TIMING ||
    perk3 === PERFECT_TIMING ||
    perk4 === PERFECT_TIMING ||
    perk5 === PERFECT_TIMING
  );
};

class Timeline extends Component {
  state = {
    team1: this.props.matchWithTimeline.participants.filter(
      participant => participant.teamId === 100
    ),
    team2: this.props.matchWithTimeline.participants.filter(
      participant => participant.teamId === 200
    ),
    slider: [0, 0],
    timeline: {
      frames: [],
      frameInterval: 0
    }
  };

  UNSAFE_componentWillMount() {
    this.calculateState([0, this.props.matchWithTimeline.timeline.frames.length - 1]);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.matchWithTimeline.matchId !== this.props.matchWithTimeline.matchId) {
      this.setState({
        team1: this.props.matchWithTimeline.participants.filter(
          participant => participant.teamId === 100
        ),
        team2: this.props.matchWithTimeline.participants.filter(
          participant => participant.teamId === 200
        ),
        slider: [0, 0],
        timeline: {
          frames: [],
          frameInterval: 0
        }
      });
      this.calculateState(this.props.matchWithTimeline.timeline.frames.length - 1);
    }
  }

  addChampionKill(event, participantsStats, team1, team1stats, team2stats) {
    const team = event.killerId <= team1.length ? team1stats : team2stats;
    team.kills += 1;

    if (event.killerId > 0) {
      participantsStats[event.killerId].kills += 1;
    }
    if (event.victimId > 0) {
      participantsStats[event.victimId].deaths += 1;
    }
    event.assistingParticipantIds.forEach(assistingParticipantId => {
      if (assistingParticipantId > 0) {
        participantsStats[assistingParticipantId].assists += 1;
      }
    });
  }

  addItem(event, participantsStats) {
    if (additionalItems.includes(event.itemId)) {
      if (event.itemId === 3513) {
        participantsStats[event.participantId].item6old =
          participantsStats[event.participantId].item6;
      }
      participantsStats[event.participantId].item6 = event.itemId;
    } else {
      if (stackableItems.includes(event.itemId)) {
        const item = participantsStats[event.participantId].items.find(
          item => item.itemId === event.itemId
        );
        if (item) {
          item.count++;
          return;
        }
      }
      participantsStats[event.participantId].items.push({
        itemId: event.itemId,
        count: 1
      });
    }
  }

  removeItem(event, participantsStats, index, sortedEvents, isDestroyed) {
    // Check if this is an elixir and instantly used
    const nextEvent = sortedEvents[index + 1];
    if (
      nextEvent &&
      nextEvent.timestamp === event.timestamp &&
      nextEvent.type === 'ITEM_PURCHASED' &&
      nextEvent.itemId === event.itemId
    ) {
      return;
    }

    // check if trinket
    if (additionalItems.includes(event.itemId)) {
      if (participantsStats[event.participantId].item6 === event.itemId && event.itemId === 3513) {
        participantsStats[event.participantId].item6 =
          participantsStats[event.participantId].item6old;
        return;
      }
    } else {
      const item = participantsStats[event.participantId].items.find(
        item => item.itemId === event.itemId
      );
      if (stackableItems.includes(event.itemId)) {
        if (item) {
          item.count--;
          if (!item.count) {
            participantsStats[event.participantId].items = participantsStats[
              event.participantId
            ].items.filter(value => value !== item);
          }
          return;
        }
      }
      if (item) {
        if (transformableItems[event.itemId] && isDestroyed) {
          item.itemId = transformableItems[event.itemId];
        } else {
          participantsStats[event.participantId].items = participantsStats[
            event.participantId
          ].items.filter(value => value !== item);
        }
        return;
      }
    }
  }

  willUndoSoon(event, index, frames, currentFrame) {
    let undo = 0;

    for (let i = currentFrame; i < frames.length; i++) {
      const sortedEvents = frames[i].events;
      for (let j = i === currentFrame ? index + 1 : 0; j < sortedEvents.length; j++) {
        if (sortedEvents[j].participantId === event.participantId) {
          // Did he/she do any action?
          if (
            ['ITEM_SOLD', 'ITEM_DESTROYED', 'ITEM_PURCHASED', 'ITEM_UNDO'].indexOf(
              sortedEvents[j].type
            ) === -1
          ) {
            return false;
          }
          if (sortedEvents[j].type === 'ITEM_PURCHASED') {
            undo--;
          } else if (sortedEvents[j].type === 'ITEM_SOLD') {
            undo--;
          } else if (sortedEvents[j].type === 'ITEM_UNDO') {
            undo++;
          }
          if (undo > 0) {
            return true;
          }
        }
      }
    }
    return false;
  }

  calculateState(slider) {
    const { matchWithTimeline } = this.props;
    const { gameDuration, timeline, participants } = matchWithTimeline;
    const { team1 } = this.state;

    const team1stats = {
      gold: 0,
      kills: 0,
      cs: 0
    };
    const team2stats = {
      gold: 0,
      kills: 0,
      cs: 0
    };

    const participantsStats = {};

    this.riftHeraldKilled = false;

    for (let i = 0; i <= slider[1]; i++) {
      const frame = timeline.frames[i];
      // Initialize participants
      if (i === 0) {
        Object.values(frame.participantFrames).forEach(participantFrame => {
          participantsStats[participantFrame.participantId] = {
            kills: 0,
            deaths: 0,
            assists: 0,
            wardsPlaced: 0,
            items: [],
            item6: matchWithTimeline.mapId === 11 ? 3340 : 0
          };
          const participant = participants.find(
            participant => participant.participantId === participantFrame.participantId
          );
          if (hasStopwatch(participant)) {
            this.addItem(
              {
                participantId: participantFrame.participantId,
                itemId: COMMENCING_STOPWATCH
              },
              participantsStats
            );
          }
        });
      }
      if (i === 6) {
        Object.values(frame.participantFrames).forEach(participantFrame => {
          const participant = participants.find(
            participant => participant.participantId === participantFrame.participantId
          );
          if (hasStopwatch(participant)) {
            this.addItem(
              {
                participantId: participantFrame.participantId,
                itemId: STOPWATCH
              },
              participantsStats
            );
          }
        });
      }
      // Only apply for current frame
      if (i === slider[1]) {
        Object.values(frame.participantFrames).forEach(participantFrame => {
          const team = participantFrame.participantId <= team1.length ? team1stats : team2stats;
          team.gold += participantFrame.totalGold;
          team.cs += participantFrame.minionsKilled + participantFrame.jungleMinionsKilled;
          Object.assign(participantsStats[participantFrame.participantId], {
            champLevel: participantFrame.level,
            goldEarned: participantFrame.totalGold,
            totalMinionsKilled: participantFrame.minionsKilled,
            neutralMinionsKilled: participantFrame.jungleMinionsKilled
          });
        });
      }
      // Apply for current and previous frames
      let skipThisTimestamp = null;
      frame.events.forEach((event, index) => {
        if (`${event.timestamp}-${event.participantId}` === skipThisTimestamp) {
          return;
        }
        switch (event.type) {
          case 'CHAMPION_KILL':
            this.addChampionKill(event, participantsStats, team1, team1stats, team2stats);
            break;

          case 'ITEM_PURCHASED':
            if (event.participantId > 0) {
              // Check if it will not undo
              if (this.willUndoSoon(event, index, timeline.frames, i) > 0) {
                skipThisTimestamp = `${event.timestamp}-${event.participantId}`;
                return;
              }

              // Check if this is an elixir and instantly used
              const previousEvent = frame.events[index - 1];
              if (
                previousEvent &&
                previousEvent.timestamp === event.timestamp &&
                previousEvent.type === 'ITEM_DESTROYED' &&
                previousEvent.itemId === event.itemId
              ) {
                return;
              }

              this.addItem(event, participantsStats);
            }
            break;

          case 'ITEM_UNDO':
            break;

          case 'ITEM_SOLD':
            {
              if (event.participantId > 0) {
                // Check if it will not undo
                if (this.willUndoSoon(event, index, timeline.frames, i) > 0) {
                  return;
                }
                this.removeItem(event, participantsStats, index, frame.events, false);
              }
            }
            break;

          case 'ITEM_DESTROYED':
            {
              if (event.participantId > 0) {
                if (
                  this.riftHeraldKilled &&
                  event.itemId !== 3513 &&
                  additionalItems.includes(event.itemId)
                ) {
                  const previousEvent = frame.events[index - 1];
                  if (
                    previousEvent &&
                    (previousEvent.timestamp !== event.timestamp ||
                      previousEvent.type !== 'ITEM_PURCHASED')
                  ) {
                    this.addItem(
                      {
                        participantId: event.participantId,
                        itemId: EYE_OF_THE_HERALD
                      },
                      participantsStats
                    );
                  }
                }

                this.removeItem(event, participantsStats, index, frame.events, true);
              }
            }
            break;

          case 'WARD_PLACED':
            if (event.wardType !== 'UNDEFINED' && event.wardType !== 'TEEMO_MUSHROOM') {
              participantsStats[event.creatorId].wardsPlaced++;
            }
            break;

          case 'ELITE_MONSTER_KILL':
            if (event.monsterType === 'RIFTHERALD') {
              this.riftHeraldKilled = true;
            }
            break;
        }
      });
    }

    // Convert items array to items
    Object.values(participantsStats).forEach(stats => {
      stats.items.forEach((item, index) => {
        stats[`item${index}`] = item.itemId;
        stats[`item${index}count`] = item.count;
      });
      delete stats.items;
    });

    const frame = timeline.frames[slider[1]];

    const isLastSlide = timeline.frames.length === slider[1] + 1;
    let minutes;
    let seconds;
    if (isLastSlide) {
      minutes = Math.floor(gameDuration / 60);
      seconds = Math.floor(gameDuration - minutes * 60);
    } else {
      minutes = Math.floor((slider[1] * timeline.frameInterval) / 60000);
      seconds = Math.floor((slider[1] * timeline.frameInterval) / 1000 - minutes * 60);
    }

    this.setState({
      frame,
      minutes,
      participantsStats,
      seconds,
      slider,
      team1stats,
      team2stats,
      timeline
    });
  }

  handleSlider = value => {
    this.calculateState(value);
  };

  render() {
    const { extendedMatchResult, matchWithTimeline } = this.props;
    const { frame, timeline, team1, team2, slider } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.teams}>
          <BannedChampions bannedChampions={extendedMatchResult.teams[0].bans} />
          <div style={styles.teamsStats}>{this.renderTeams()}</div>
          <BannedChampions bannedChampions={extendedMatchResult.teams[1].bans} />
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>{this.renderParticipants(team1, 0)}</div>
          <div style={styles.map}>
            <ActionMap
              endFrame={slider[1]}
              height={290}
              mapId={matchWithTimeline.mapId}
              matches={[extendedMatchResult]}
              startFrame={slider[0]}
              width={290}
            />
            {frame && (
              <div style={{ textAlign: 'center' }}>
                <Range
                  activeDotStyle={{ border: 'none', backgroundColor: 'rgb(147, 115, 65)' }}
                  dotStyle={{ border: 'none' }}
                  handleStyle={[
                    { border: 'none', backgroundColor: 'rgb(147, 115, 65)' },
                    { border: 'none', backgroundColor: 'rgb(147, 115, 65)' }
                  ]}
                  max={timeline.frames.length - 1 || 1}
                  min={0}
                  onChange={this.handleSlider}
                  railStyle={{ backgroundColor: 'rgb(189, 189, 189)' }}
                  step={1}
                  trackStyle={[
                    { backgroundColor: 'rgb(147, 115, 65)' },
                    { backgroundColor: 'rgb(147, 115, 65)' }
                  ]}
                  value={slider}
                />
                {this.renderTime()}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>{this.renderParticipants(team2, team1.length)}</div>
        </div>
        {[8, 10, 11, 12].indexOf(matchWithTimeline.mapId) === -1 && (
          <div style={{ textAlign: 'center' }}>Timeline is not available for this map.</div>
        )}
      </div>
    );
  }

  renderTeams() {
    const { team1stats, team2stats } = this.state;

    return (
      <span>
        <span style={styles.teamStatistic}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>{team1stats.cs}</span>{' '}
          CS
        </span>
        <span style={styles.teamStatistic}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>{team1stats.gold}</span>{' '}
          Gold
        </span>
        <span style={styles.teamStatistic}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>
            {team1stats.kills}
          </span>{' '}
          Kills
        </span>
        vs
        <span style={styles.teamStatistic}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>
            {team2stats.kills}
          </span>{' '}
          Kills
        </span>
        <span style={styles.teamStatistic}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>{team2stats.gold}</span>{' '}
          Gold
        </span>
        <span style={styles.teamStatistic}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>{team2stats.cs}</span>{' '}
          CS
        </span>
      </span>
    );
  }

  renderTime() {
    const { minutes, seconds } = this.state;

    return (
      <span style={{ fontSize: 'medium' }}>
        {minutes < 10 && '0'}
        {minutes}:{seconds < 10 && '0'}
        {seconds}
      </span>
    );
  }

  renderParticipants(participants, offset) {
    const { extendedMatchResult, onParticipantSelect } = this.props;
    const { opponents, teammates } = extendedMatchResult;
    const { participantsStats } = this.state;

    return participants.map((participant, index) => {
      const champion = champions[participant.championId];
      const participantId = index + 1 + offset;

      let stats;
      if (participantsStats) {
        stats = participantsStats[participantId];
      } else {
        const matchParticipant =
          opponents.find(opponent => opponent.participantId === participantId) ||
          teammates.find(teammate => teammate.participantId === participantId);
        stats = matchParticipant ? matchParticipant.stats : {};
      }

      const participantIdentity = extendedMatchResult.participantIdentities.find(
        identity => identity.participantId === participantId
      );

      return (
        <TimelineParticipant
          champion={champion}
          key={participantId}
          onParticipantSelect={onParticipantSelect}
          participant={participant}
          participantId={participantId}
          participantIdentity={participantIdentity}
          selected={extendedMatchResult.participant.participantId === participantId}
          stats={stats}
        />
      );
    });
  }
}

Timeline.propTypes = {
  matchWithTimeline: PropTypes.object.isRequired,
  onParticipantSelect: PropTypes.func,
  extendedMatchResult: PropTypes.object.isRequired
};

export default Timeline;
