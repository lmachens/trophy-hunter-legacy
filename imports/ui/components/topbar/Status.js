import { Tooltip } from '../generic/Tooltip';
import { DoneIcon, WarningIcon } from '../icons';
import { JobsServiceStatus, RiotApiStatus } from '../../../api/status/collections';
import React, { PureComponent } from 'react';
import { Typography } from '../generic/_Typography';

import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  noIssue: {
    width: 20,
    height: 20,
    color: 'green'
  },
  issue: {
    width: 20,
    height: 20,
    color: 'red'
  },
  status: {
    display: 'inline-flex',
    alignItems: 'center'
  }
};

class Status extends PureComponent {
  state = {
    open: false
  };

  componentDidMount() {
    const { hasJobServiceHeartbeat, riotApiStatus, loading } = this.props;
    const hasRiotApiStatusIssues = riotApiStatus && riotApiStatus.length > 0;
    const hasIssue = hasRiotApiStatusIssues || !hasJobServiceHeartbeat;

    if (hasIssue && !loading) {
      this.showTooltip();
    }
  }

  componentDidUpdate(prevProps) {
    const hadRiotApiStatusIssues = prevProps.riotApiStatus && prevProps.riotApiStatus.length > 0;
    const hadIssue = hadRiotApiStatusIssues || !prevProps.hasJobServiceHeartbeat;

    const { hasJobServiceHeartbeat, riotApiStatus } = this.props;
    const hasRiotApiStatusIssues = riotApiStatus && riotApiStatus.length > 0;
    const hasIssue = hasRiotApiStatusIssues || !hasJobServiceHeartbeat;

    if (hasIssue && (!hadIssue || prevProps.loading)) {
      this.showTooltip();
    }
    if (!hasIssue && hadIssue) {
      this.handleTooltipClose();
    }
  }

  showTooltip() {
    this.handleTooltipOpen();
    document.onclick = () => {
      this.handleTooltipClose();
      document.onclick = null;
    };
  }

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { style, hasJobServiceHeartbeat, riotApiStatus, loading } = this.props;

    if (loading) return null;

    const hasRiotApiStatusIssues = riotApiStatus && riotApiStatus.length > 0;
    const hasIssue = hasRiotApiStatusIssues || !hasJobServiceHeartbeat;

    const tooltipContent = (
      <div>
        <Typography>
          {hasIssue
            ? 'Some services are troubled or down! Trophy Hunter might not work like expected.'
            : 'All services are up. Trophy Hunter should work like expected.'}
        </Typography>
        <Typography style={styles.status}>RiotAPI:</Typography>
        {hasRiotApiStatusIssues ? (
          <WarningIcon style={styles.issue} />
        ) : (
          <DoneIcon style={styles.noIssue} />
        )}
        <br />
        <Typography style={styles.status}>Match check service: </Typography>
        {!hasJobServiceHeartbeat ? (
          <WarningIcon style={styles.issue} />
        ) : (
          <DoneIcon style={styles.noIssue} />
        )}
      </div>
    );

    const icon = hasIssue ? (
      <WarningIcon style={styles.issue} />
    ) : (
      <DoneIcon style={styles.noIssue} />
    );

    return (
      <span style={style}>
        <Tooltip
          disableFocusListener
          disableHoverListener
          disableTouchListener
          onClose={this.handleTooltipClose}
          open={this.state.open}
          title={<TooltipTitle content={tooltipContent} title="Services" />}
        >
          <span onMouseLeave={this.handleTooltipClose} onMouseOver={this.handleTooltipOpen}>
            {icon}
          </span>
        </Tooltip>
      </span>
    );
  }
}

Status.propTypes = {
  style: PropTypes.object,
  riotApiStatus: PropTypes.array.isRequired,
  hasJobServiceHeartbeat: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

const StatusContainer = withTracker(() => {
  const riotApiStatusHandle = Meteor.subscribe('riotApiStatus');
  const jobServiceStatusHandle = Meteor.subscribe('jobsServiceStatus');
  const riotApiStatus = RiotApiStatus.find().fetch();
  const jobServiceStatus = JobsServiceStatus.find().fetch();
  const hasJobServiceHeartbeat = jobServiceStatus.length > 0;
  const loading = !riotApiStatusHandle.ready() || !jobServiceStatusHandle.ready();

  return {
    riotApiStatus,
    hasJobServiceHeartbeat,
    loading
  };
})(Status);

export default StatusContainer;
