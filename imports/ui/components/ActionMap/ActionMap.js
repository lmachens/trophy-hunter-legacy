import { Checkbox } from '../generic';
import React, { Component } from 'react';
import { getChampionSquare, getMinimap } from '../../../api/riot-api/staticData';

import Heatmap from '../Heatmap';
import PropTypes from 'prop-types';
import { domains } from '../../../api/riot-api/gameConstants';
import flatten from 'lodash.flatten';
import { MenuItem } from '../generic/MenuItem';
import { Select } from '../generic/Select';

const xScale = (x, map, width) => {
  const xTotal = domains[map].max.x - domains[map].min.x;
  return Math.floor((x * width) / xTotal);
};

const yScale = (y, map, height) => {
  const yTotal = domains[map].max.y - domains[map].min.y;
  return Math.floor((y * height) / yTotal);
};

const styles = {
  actions: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  action: {
    width: 'initial',
    margin: '0 5px'
  },
  checkbox: {
    width: 200,
    margin: '10px auto'
  }
};

class ActionMap extends Component {
  state = {
    action: this.props.defaultAction || 'fights',
    allParticipants: false
  };

  handleActionChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAllChange = (event, value) => {
    this.setState({
      allParticipants: !value
    });
  };

  renderActionButtons() {
    const { action } = this.state;
    return (
      <Select name="action" onChange={this.handleActionChange} value={action}>
        <MenuItem value="fights">Kills, assists and deaths</MenuItem>
        <MenuItem value="laning">Movement (every 60 sec)</MenuItem>
        <MenuItem value="positions">Current Position</MenuItem>
      </Select>
    );
  }

  renderAllToggle() {
    return (
      <Checkbox
        checked={!this.state.allParticipants}
        label="Only selected summoner"
        labelPosition="right"
        onCheck={this.handleAllChange}
        style={styles.checkbox}
      />
    );
  }

  render() {
    const { hideAllSummoners, matches, height, mapId, width } = this.props;

    const { action } = this.state;

    return (
      <div
        style={{
          width,
          textAlign: 'center'
        }}
      >
        {action === 'laning' && matches.length > 0 && this.renderLaning()}
        {action === 'fights' && matches.length > 0 && this.renderFights()}

        <svg height={height} width={width}>
          <image height={height} width={width} x={0} xlinkHref={getMinimap(mapId)} y={0} />
          {action === 'positions' && matches.length > 0 && this.renderPositions()}
        </svg>
        {this.renderActionButtons()}
        {!hideAllSummoners && this.renderAllToggle()}
      </div>
    );
  }

  renderLaning() {
    const {
      heatmapConfig,
      matches,
      height,
      mapId,
      startFrame,
      endFrame,
      teamId,
      width
    } = this.props;
    const { allParticipants } = this.state;

    const participantFrames = [];
    matches.forEach(({ participant, timeline }) => {
      if (teamId && participant.teamId !== teamId) {
        return;
      }
      const maxFrames = Math.min(timeline.frames.length, endFrame);
      timeline.frames.slice(startFrame, maxFrames).forEach(frame => {
        let result;
        if (allParticipants) {
          [...frame.participantFrames].forEach(participantFrame => {
            if (!participantFrame || !participantFrame.position) {
              return;
            }
            participantFrames.push(participantFrame);
          });
        } else {
          result = frame.participantFrames[participant.participantId];
          if (!result || !result.position) {
            return;
          }
          participantFrames.push(result);
        }
      });
    });

    const data = participantFrames.map(({ position }) => {
      const x = xScale(position.x, mapId, width);
      const y = height - yScale(position.y, mapId, height);
      return {
        x,
        y,
        value: 1
      };
    });

    return (
      <Heatmap
        config={heatmapConfig}
        containerStyle={{
          position: 'absolute'
        }}
        data={{
          max: Math.sqrt(data.length / 2),
          data
        }}
        style={{
          height,
          width
        }}
      />
    );
  }

  renderFights() {
    const {
      heatmapConfig,
      matches,
      height,
      mapId,
      startFrame,
      endFrame,
      teamId,
      width
    } = this.props;
    const { allParticipants } = this.state;

    const participantKillParticipationEvents = [];
    matches.forEach(({ participant, timeline }) => {
      if (teamId && participant.teamId !== teamId) {
        return;
      }
      const maxFrames = Math.min(timeline.frames.length, endFrame);
      const events = flatten(
        timeline.frames.slice(startFrame, maxFrames).map(frame => {
          return frame.events.filter(event => {
            if (event.type !== 'CHAMPION_KILL') {
              return false;
            }
            if (allParticipants) {
              return true;
            }
            return (
              event.killerId === participant.participantId || // Participant is the killer
              event.assistingParticipantIds.includes(participant.participantId) || // or assistent
              event.victimId === participant.participantId
            ); // or victim
          });
        })
      );
      if (events.length) {
        participantKillParticipationEvents.push(...events);
      }
    });

    const data = participantKillParticipationEvents.map(({ position }) => {
      const x = xScale(position.x, mapId, width);
      const y = height - yScale(position.y, mapId, height);
      return {
        x,
        y,
        value: 1
      };
    });

    return (
      <Heatmap
        config={heatmapConfig}
        containerStyle={{
          position: 'absolute'
        }}
        data={{
          max: Math.sqrt(data.length / 2),
          data
        }}
        style={{
          height,
          width
        }}
      />
    );
  }

  renderPositions() {
    const { matches, height, mapId, endFrame, width } = this.props;
    const { allParticipants } = this.state;

    const { participant, participants, timeline } = matches[0];
    const isLastSlide = timeline.frames.length === endFrame + 1;
    const frame = timeline.frames[endFrame];

    return (
      <g>
        {frame &&
          Object.values(frame.participantFrames).map((participantFrame, index) => {
            if (!allParticipants && participantFrame.participantId !== participant.participantId) {
              return;
            }
            // Get position of this frame or the frame before if not available
            let position;
            if (isLastSlide) {
              const frame = timeline.frames[endFrame - 1].participantFrames[index];
              if (!frame) {
                return;
              }
              position = frame.position;
            } else {
              if (!participantFrame) {
                return;
              }
              position = participantFrame.position;
            }

            const x = xScale(position.x, mapId, width);
            const y = height - yScale(position.y, mapId, height);
            const { teamId, championId } = participants.find(
              p => p.participantId === participantFrame.participantId
            );

            return [
              <clipPath id={`clipCircle${index}`} key={`clipPath${participantFrame.participantId}`}>
                <circle cx={x} cy={y} r="9" />
              </clipPath>,
              <circle
                cx={x}
                cy={y}
                key={`circle${participantFrame.participantId}`}
                r="9"
                stroke={teamId === 100 ? 'blue' : 'red'}
                strokeWidth="1"
              />,
              <image
                clipPath={`url(#clipCircle${index})`}
                height={18}
                key={participantFrame.participantId}
                width={18}
                x={x - 9}
                xlinkHref={getChampionSquare({ championId })}
                y={y - 9}
              />
            ];
          })}
      </g>
    );
  }
}

ActionMap.propTypes = {
  defaultAction: PropTypes.string,
  heatmapConfig: PropTypes.object,
  matches: PropTypes.array,
  height: PropTypes.number.isRequired,
  hideAllSummoners: PropTypes.bool,
  mapId: PropTypes.number.isRequired,
  startFrame: PropTypes.number.isRequired,
  endFrame: PropTypes.number.isRequired,
  teamId: PropTypes.number,
  width: PropTypes.number.isRequired
};

export default ActionMap;
