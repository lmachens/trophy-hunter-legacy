import React, { PureComponent } from 'react';

import AvatarWithStatus from '../AvatarWithStatus';
import { Meteor } from 'meteor/meteor';
import PlaystyleIcon from '../playstyle/PlaystyleIcon';
import PropTypes from 'prop-types';
import { fieldsBySeason } from '../../../api/ranking/seasons';
import TreeTrophy from '../tree/TreeTrophy';
import { activeTrees } from '../../../api/trees/trees';
import { fade } from 'material-ui/utils/colorManipulator';
import { getStats } from '../../../api/trophy-hunters/helpers';
import playstyles from '../../../api/playstyles/playstyles';
import universeTheme from '../../layouts/universeTheme';

class Ranking extends PureComponent {
  state = {
    hovered: false
  };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleItemClick = event => {
    event.stopPropagation();
  };

  handleTwitchClick(url, userId, event) {
    event.preventDefault();
    event.stopPropagation();
    window.open(url);
    Meteor.call('channelClick', userId);
  }

  handleClick = event => {
    const { onClick, previewItems, trophyHunter } = this.props;
    event.preventDefault();
    event.stopPropagation();

    if (!previewItems && onClick) onClick(event, trophyHunter);
  };

  render() {
    const { previewItems, style, trophyHunter, season } = this.props;

    const primaryText = (
      <span>
        <span style={{ color: universeTheme.palette.secondaryTextColor, marginRight: 4 }}>
          {trophyHunter[fieldsBySeason[season]]}.
        </span>
        {trophyHunter.summonerName} ({trophyHunter.region})
      </span>
    );
    let { games, wins } = trophyHunter.features;
    wins = wins === true ? 1 : wins || 0;
    games = games === true ? 1 : games || 0;

    let secondaryText = getStats(trophyHunter, season);
    if (!previewItems) {
      secondaryText += ` | ${wins}W ${games - wins}L`;
    }
    const items = [];
    const twitch = (previewItems && previewItems.twitch) || trophyHunter.items.twitch;
    if (twitch && twitch.visible) {
      items.push(
        <a
          key="twitch"
          onClick={event =>
            this.handleTwitchClick(
              `https://www.twitch.tv/${twitch.name}`,
              trophyHunter.userId,
              event
            )
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/images/twitch_small.png"
            style={{ marginLeft: '6px', height: '40px', width: '40px' }}
          />
        </a>
      );
    }
    const youTube = (previewItems && previewItems.youTube) || trophyHunter.items.youTube;
    if (youTube && youTube.visible) {
      items.push(
        <a
          href={`https://www.youtube.com/${youTube.type}/${youTube.name}`}
          key="youTube"
          onClick={this.handleItemClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/images/youTube_small.png"
            style={{ marginLeft: '6px', height: '40px', width: '40px' }}
          />
        </a>
      );
    }

    if (trophyHunter.playstyle) {
      items.push(
        <PlaystyleIcon
          containerStyle={{
            display: 'inline-block',
            marginLeft: 20
          }}
          key={`${trophyHunter._id}-${trophyHunter.playstyle}`}
          playstyle={playstyles[trophyHunter.playstyle] || playstyles.unknown}
          style={{
            height: 40,
            width: 40
          }}
        />
      );
    }

    const treeProgress = this.getTreeProgress();
    treeProgress.forEach(item => items.push(item));

    return (
      <div
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={Object.assign(
          {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor:
              !previewItems && this.state.hovered
                ? fade(universeTheme.palette.textColor, 0.1)
                : null,
            cursor: 'pointer',
            paddingTop: 6
          },
          style
        )}
      >
        <AvatarWithStatus size={40} trophyHunter={trophyHunter} />
        <div
          style={{
            flex: 1,
            margin: '1px 6px'
          }}
        >
          <span
            style={{
              fontSize: '1.3em'
            }}
          >
            {primaryText}
          </span>
          <br />
          <span
            style={{
              color: universeTheme.palette.secondaryTextColor,
              fontSize: '1.1em'
            }}
          >
            {secondaryText}
          </span>
        </div>
        <div>{items}</div>
      </div>
    );
  }

  getTreeProgress() {
    const { trophyHunter } = this.props;

    const result = [];
    const trophyHunterTrees = Object.keys(activeTrees);
    const customTree = (trophyHunter && trophyHunter.customTree) || 'placeholder';
    trophyHunterTrees.push(customTree);

    trophyHunterTrees.forEach(treeName => {
      const trophyHunterTree = (trophyHunter && trophyHunter.trees[treeName]) || {
        progress: 0
      };
      result.push(
        <TreeTrophy
          key={treeName}
          progress={trophyHunterTree.progress}
          size={50}
          style={{ margin: '8px 16px' }}
          treeTrophyName={treeName}
        />
      );
    });

    return result;
  }
}

Ranking.propTypes = {
  trophyHunter: PropTypes.object,
  style: PropTypes.object,
  previewItems: PropTypes.object,
  trees: PropTypes.array,
  onClick: PropTypes.func,
  season: PropTypes.string.isRequired
};

export default Ranking;
