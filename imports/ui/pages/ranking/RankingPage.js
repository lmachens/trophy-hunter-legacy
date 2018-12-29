import { Button, List } from '/imports/ui/components/generic';
import React, { Component } from 'react';

import HorizontalScroll from '/imports/ui/components/generic/HorizontalScroll';
import LoadingComponent from '/imports/ui/components/loading/LoadingComponent';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import RankingTrophyHunters from './RankingTrophyHunters';
import TrophyHunterPopover from '/imports/ui/components/trophy-hunter/TrophyHunterPopover';
import isEqual from 'lodash.isequal';
import queryString from 'query-string';
import throttle from 'lodash.throttle';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    flexFlow: 'column'
  },
  list: {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden'
  }
};

class RankingPage extends Component {
  state = {
    loading: true,
    trophyHunters: [],
    count: 0,
    popover: {}
  };

  handleClick = (event, trophyHunter) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      popover: {
        open: true,
        anchorEl: event.currentTarget,
        targetTrophyHunter: trophyHunter
      }
    });
  };

  handleRequestClose = () => {
    this.setState({
      popover: {}
    });
  };

  render() {
    const { loading, popover, trophyHunters, season } = this.state;

    return (
      <div style={styles.root}>
        {this.renderNavigation()}
        <List style={styles.list}>
          {loading ? (
            <LoadingComponent />
          ) : (
            <RankingTrophyHunters
              onClick={this.handleClick}
              season={season}
              trophyHunters={trophyHunters}
            />
          )}
        </List>
        <TrophyHunterPopover
          anchorEl={popover.anchorEl}
          onRequestClose={this.handleRequestClose}
          open={popover.open}
          targetTrophyHunter={popover.targetTrophyHunter}
        />
      </div>
    );
  }

  UNSAFE_componentWillMount() {
    this.updateTrophyHunters(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateTrophyHunters(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState);
  }

  updateTrophyHunters(props) {
    const { region, skip, limit, youTube, twitch, summonerName, season } = queryString.parse(
      props.history.location.search
    );
    const query = {};
    if (region) {
      query.region = region;
    }
    if (youTube) {
      query['items.youTube.visible'] = true;
    }
    if (twitch) {
      query['items.twitch.visible'] = true;
    }
    if (summonerName) {
      query.summonerName = summonerName;
    }
    query.season = season;

    const options = {
      skip: (skip && parseInt(skip)) || 0,
      limit: (limit && parseInt(limit)) || 30
    };

    const calledAt = Date.now();

    this.setState(
      {
        loading: true,
        season,
        limit: options.limit
      },
      () => {
        this.resetHorizontalScroll();
        this.getRanking(query, options, calledAt);
      }
    );
  }

  getRanking = throttle((query, options, calledAt) => {
    Meteor.call('getRanking', query, options, calledAt, (error, result) => {
      if (!error && calledAt === result.calledAt) {
        this.setState({
          trophyHunters: result.trophyHunters,
          count: result.count,
          loading: false
        });
      }
    });
  }, 300);

  handleSectionClick(section) {
    const { history } = this.props;
    const query = Object.assign(queryString.parse(history.location.search), {
      skip: section.from
    });
    history.replace(`/ranking?${queryString.stringify(query)}`);
  }

  resetHorizontalScroll = () => {
    if (this.horizontalScroll) {
      this.horizontalScroll.setState({
        left: 0
      });
    }
  };

  renderNavigation() {
    const { count, limit } = this.state;
    const countSections = Math.ceil(count / limit);
    const sections = [];
    for (let i = 0; i < countSections; i++) {
      sections.push({
        from: i * limit,
        to: (i + 1) * limit
      });
    }

    return (
      <div style={{ margin: '0 10px' }}>
        {sections.length > 0 ? (
          <HorizontalScroll ref={value => (this.horizontalScroll = value)}>
            {sections.map(section => (
              <Button
                key={section.from}
                label={`${section.from + 1}-${section.to}`}
                onClick={this.handleSectionClick.bind(this, section)}
                style={{ margin: '0', height: 48, zIndex: 0 }}
              />
            ))}
          </HorizontalScroll>
        ) : (
          <span>No results</span>
        )}
      </div>
    );
  }
}

RankingPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(RankingPage);
