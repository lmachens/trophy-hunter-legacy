import { List, ListItem } from '../generic';
import React, { Component } from 'react';

import AvatarWithStatus from '../AvatarWithStatus';
import InfiniteScroll from 'react-infinite-scroller';
import Level from './Level';
import PropTypes from 'prop-types';
import Rank from './Rank';
import TrophyHunterPopover from '../trophy-hunter/TrophyHunterPopover';
import universeTheme from '../../layouts/universeTheme';

class TrophyHunter extends Component {
  state = {
    trophyHunters: this.props.trophyHunters || [],
    popover: {}
  };

  render() {
    const { avoidPopover, loadMore } = this.props;
    const { popover } = this.state;
    const style = {
      padding: '0px'
    };
    if (!loadMore) {
      style.overflowY = 'auto';
    }
    return (
      <List style={style}>
        {loadMore ? this.renderInfiniteScroll() : this.renderTrophyHunters()}
        {!avoidPopover && (
          <TrophyHunterPopover
            anchorEl={popover.anchorEl}
            onRequestClose={this.handleRequestClose}
            open={popover.open}
            targetTrophyHunter={popover.targetTrophyHunter}
          />
        )}
      </List>
    );
  }

  renderInfiniteScroll() {
    const { count, loadHeight, loadMore, trophyHunters } = this.props;
    const hasMore = trophyHunters && count > trophyHunters.length;

    return (
      <div style={{ maxHeight: loadHeight, overflowY: 'auto', overflowX: 'hidden' }}>
        <InfiniteScroll
          hasMore={hasMore}
          loadMore={loadMore}
          loader={<div style={{ textAlign: 'center' }}>Loading ...</div>}
          pageStart={0}
          threshold={120}
          useWindow={false}
        >
          {this.renderTrophyHunters()}
        </InfiniteScroll>
      </div>
    );
  }

  renderTrophyHunters() {
    const { avoidPopover, trophyHunters, rankField } = this.props;

    return (
      trophyHunters &&
      trophyHunters.map(trophyHunter => {
        const name = `${trophyHunter.summonerName} (${trophyHunter.region})`;

        return (
          <ListItem
            disabled={avoidPopover}
            innerDivStyle={{ padding: '6px 6px 6px 52px' }}
            key={trophyHunter.userId}
            leftAvatar={
              <div style={{ left: 0, top: 0 }}>
                <AvatarWithStatus size={40} style={{ margin: 5 }} trophyHunter={trophyHunter} />
              </div>
            }
            onClick={event => this.handleClick(event, trophyHunter)}
            primaryText={<div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{name}</div>}
            secondaryText={
              <div
                style={{
                  color: universeTheme.palette.secondaryTextColor,
                  fontSize: 'small'
                }}
              >
                <Rank rank={trophyHunter[rankField]} /> |{' '}
                <Level level={trophyHunter.summonerLevel} />
              </div>
            }
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              fontSize: 'small',
              transition: 'none'
            }}
          />
        );
      })
    );
  }

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
}

TrophyHunter.propTypes = {
  loadHeight: PropTypes.number,
  trophyHunters: PropTypes.array,
  avoidPopover: PropTypes.bool,
  count: PropTypes.number,
  loadMore: PropTypes.func,
  rankField: PropTypes.string
};

export default TrophyHunter;
