import { Tooltip } from '../../../generic/Tooltip';
import { IconButtonV2, Typography, withStyles } from '../../../generic';
import React, { Fragment, PureComponent } from 'react';
import { getMinimap } from '../../../../../api/riot-api/staticData';
import { Champion } from './_Champion';

import { AddIcon } from '../../../icons/Add';
import { CircularProgress } from '../../../generic/CircularProgress';
import { FastForward } from '../../../icons/FastForward';
import { FastRewind } from '../../../icons/FastRewind';
import HeatmapLib from '../../../Heatmap';
import PropTypes from 'prop-types';
import { RemoveIcon } from '../../../icons/Remove';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { domains } from '/imports/shared/riot-api/gameConstants.ts';
import { fetchParticipantHeatmapIfNeeded, setUIState } from '../../../../../store/actions';

const xScale = (x, map, width) => {
  const xTotal = domains[map].max.x - domains[map].min.x;
  return Math.floor((x * width) / xTotal);
};

const yScale = (y, map, height) => {
  const yTotal = domains[map].max.y - domains[map].min.y;
  return Math.floor((y * height) / yTotal);
};

const width = 116;
const height = 116;

const styles = {
  svg: {
    position: 'absolute'
  },
  info: {
    marginLeft: 113,
    marginTop: 3,
    textAlign: 'center'
  },
  champion: {
    width: 26,
    height: 26,
    display: 'inline-block',
    marginRight: 6
  },
  role: {
    width: 26,
    height: 26
  },
  range: {
    display: 'inline-flex'
  },
  button: {
    width: 30,
    height: 30,
    padding: 0
  },
  progress: {
    position: 'absolute',
    top: 40,
    left: 40,
    zIndex: 1
  },
  noData: {
    position: 'absolute',
    top: 45,
    left: 25,
    zIndex: 1,
    fontSize: '1.2rem',
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
  }
};

const labels = {
  TOP: 'Top',
  JUNGLE: 'Jungle',
  MIDDLE: 'Middle',
  DUO_CARRY: 'Duo Carry',
  DUO_SUPPORT: 'Duo Support'
};

const frameLimit = 20;
class Heatmap extends PureComponent {
  componentDidMount() {
    const { fetchParticipantHeatmapIfNeeded, identifier } = this.props;
    if (identifier) fetchParticipantHeatmapIfNeeded(identifier);
  }

  componentDidUpdate(prevProps) {
    const { fetchParticipantHeatmapIfNeeded, identifier } = this.props;
    if (identifier !== prevProps.identifier && identifier) {
      fetchParticipantHeatmapIfNeeded(identifier);
    }
  }

  handlePrevious = () => {
    const { startFrame, endFrame } = this.props;
    let state;
    if (startFrame === 0) {
      state = {
        startFrame: frameLimit - endFrame,
        endFrame: frameLimit
      };
    } else {
      state = {
        startFrame: startFrame - 1,
        endFrame: endFrame - 1
      };
    }
    this.props.setUIState(state);
  };

  handleNext = () => {
    const { startFrame, endFrame } = this.props;
    let state;

    if (endFrame === frameLimit) {
      state = {
        startFrame: 0,
        endFrame: endFrame - startFrame
      };
    } else {
      state = {
        startFrame: startFrame + 1,
        endFrame: endFrame + 1
      };
    }
    this.props.setUIState(state);
  };

  handleIncrease = () => {
    const { endFrame } = this.props;

    if (endFrame < frameLimit) {
      this.props.setUIState({
        endFrame: endFrame + 1
      });
    }
  };

  handleDecrease = () => {
    const { startFrame, endFrame } = this.props;

    if (endFrame - startFrame >= 2) {
      this.props.setUIState({
        endFrame: endFrame - 1
      });
    }
  };

  render() {
    const {
      classes,
      mapId,
      championId,
      role = 'MIDDLE',
      participantHeatmap = {},
      teamId,
      startFrame,
      endFrame
    } = this.props;
    const { framesByTeamId = {}, isFetching = false } = participantHeatmap;
    const participantFrames = framesByTeamId[teamId] || [];
    const data = [];
    participantFrames.forEach(frame => {
      const maxFrames = Math.min(frame.length, endFrame);

      frame.slice(startFrame, maxFrames).forEach((position, index) => {
        const x = xScale(position.x, mapId, width);
        const y = height - yScale(position.y, mapId, height);
        const value = index / (maxFrames - startFrame);
        data.push({
          x,
          y,
          value
        });
      });
    });

    const from = startFrame > 9 ? startFrame : `0${startFrame}`;
    const to = endFrame > 9 ? endFrame : `0${endFrame}`;

    return (
      <Fragment>
        {isFetching && <CircularProgress className={classes.progress} color="primary" />}
        {!isFetching && data.length === 0 && (
          <Typography className={classes.noData}>No Data</Typography>
        )}
        <HeatmapLib
          config={{
            radius: 20
          }}
          containerStyle={{
            position: 'absolute',
            zIndex: 1
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
        <svg className={classes.svg} height={height} width={width}>
          <image height={height} width={width} x={0} xlinkHref={getMinimap(mapId)} y={0} />
        </svg>
        <div className={classes.info}>
          <div className={classes.range}>
            <IconButtonV2 className={classes.button} onClick={this.handlePrevious}>
              <FastRewind />
            </IconButtonV2>
            <IconButtonV2 className={classes.button} onClick={this.handleNext}>
              <FastForward />
            </IconButtonV2>
          </div>
          <div className={classes.range}>
            <IconButtonV2
              className={classes.button}
              disabled={endFrame - startFrame < 2}
              onClick={this.handleDecrease}
            >
              <RemoveIcon />
            </IconButtonV2>
            <IconButtonV2
              className={classes.button}
              disabled={endFrame >= frameLimit}
              onClick={this.handleIncrease}
            >
              <AddIcon />
            </IconButtonV2>
          </div>
          <Tooltip title={`Movement between minutes ${from} and ${to}`}>
            <Typography>
              {from} - {to} m
            </Typography>
          </Tooltip>
          <Champion championId={championId} className={classes.champion} />
          <Tooltip title={labels[role]}>
            <img className={classes.role} src={`/images/${role}_icon.png`} />
          </Tooltip>
        </div>
      </Fragment>
    );
  }
}

Heatmap.propTypes = {
  classes: PropTypes.object.isRequired,
  mapId: PropTypes.number.isRequired,
  championId: PropTypes.number,
  identifier: PropTypes.string,
  role: PropTypes.string,
  teamId: PropTypes.number,
  participantHeatmap: PropTypes.object,
  fetchParticipantHeatmapIfNeeded: PropTypes.func.isRequired,
  startFrame: PropTypes.number,
  endFrame: PropTypes.number,
  setUIState: PropTypes.func.isRequired
};

const mapStateToProps = ({
  participantsHeatmapByParticipant,
  liveMatch: { mapId, mapTarget, platformId },
  uiStates: { startFrame, endFrame }
}) => {
  if (!mapTarget) return { mapId, startFrame, endFrame };
  const identifier = `${platformId}&${mapTarget.summonerId}&${mapTarget.championId}&${
    mapTarget.role
  }&${mapId}`;
  const participantHeatmap = participantsHeatmapByParticipant[identifier] || {};

  return {
    mapId,
    championId: mapTarget.championId,
    role: mapTarget.role,
    teamId: mapTarget.teamId,
    participantHeatmap,
    identifier,
    startFrame,
    endFrame
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchParticipantHeatmapIfNeeded: bindActionCreators(fetchParticipantHeatmapIfNeeded, dispatch),
    setUIState: bindActionCreators(setUIState, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Heatmap);
export { enhanced as Heatmap };
