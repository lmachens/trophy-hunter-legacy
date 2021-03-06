import { Tooltip } from '../generic/Tooltip';
import { DoneIcon, WarningIcon } from '../icons';
import { RiotApiStatus } from '../../../api/status/collections';
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
    const { riotApiStatus, loading } = this.props;
    const hasRiotApiStatusIssues = riotApiStatus && riotApiStatus.length > 0;
    const hasIssue = hasRiotApiStatusIssues;

    if (hasIssue && !loading) {
      this.showTooltip();
    }
  }

  componentDidUpdate(prevProps) {
    const hadRiotApiStatusIssues = prevProps.riotApiStatus && prevProps.riotApiStatus.length > 0;
    const hadIssue = hadRiotApiStatusIssues;

    const { riotApiStatus } = this.props;
    const hasRiotApiStatusIssues = riotApiStatus && riotApiStatus.length > 0;
    const hasIssue = hasRiotApiStatusIssues;

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
    const { style, riotApiStatus, loading } = this.props;

    if (loading) return null;

    const hasRiotApiStatusIssues = riotApiStatus && riotApiStatus.length > 0;
    const hasIssue = hasRiotApiStatusIssues;

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
  loading: PropTypes.bool.isRequired
};

const StatusContainer = withTracker(() => {
  const riotApiStatusHandle = Meteor.subscribe('riotApiStatus');
  const riotApiStatus = RiotApiStatus.find().fetch();
  const loading = !riotApiStatusHandle.ready();

  return {
    riotApiStatus,
    loading
  };
})(Status);

export default StatusContainer;
