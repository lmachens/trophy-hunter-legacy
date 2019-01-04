import { getFirstTimeBonus, getTreeBonus } from '../../../api/trophies';
import { trophies } from '/imports/shared/trophies/trophies.ts';

import HorizontalScroll from '../generic/HorizontalScroll';
import LoadingComponent from '../loading/LoadingComponent';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import React from 'react';
import Trophy from '../Trophy';
import { calculateTrophies } from '/imports/shared/trophies/calculateTrophies.ts';

class TrophiesObtained extends React.Component {
  static propTypes = {
    extendedMatchResult: PropTypes.object.isRequired
  };

  state = {
    trophiesObtained: {}
  };

  UNSAFE_componentWillMount() {
    this.updateTrophiesObtained(this.props.extendedMatchResult);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateTrophiesObtained(nextProps.extendedMatchResult);
  }

  updateTrophiesObtained(extendedMatchResult) {
    const { platformId, participantIdentity, gameId } = extendedMatchResult;
    const summonerId = participantIdentity.player.summonerId;
    if (this.state.trophiesObtained[summonerId]) {
      return;
    }

    Meteor.call('calculateTrophies', platformId, gameId, summonerId, (error, result) => {
      if (!error) {
        let trophiesObtained;
        if (result) {
          trophiesObtained = result;
        } else {
          const calculatedTrophies = calculateTrophies({ extendedMatchResult });
          trophiesObtained = calculatedTrophies.map(({ trophy }) => {
            return {
              name: trophy.name,
              isNew: false,
              newInTree: false
            };
          });
        }
        this.setState(prevState => {
          prevState.trophiesObtained[summonerId] = trophiesObtained;
          return {
            trophiesObtained: prevState.trophiesObtained
          };
        });
      }
    });
  }

  render() {
    const { extendedMatchResult } = this.props;
    const summonerId = extendedMatchResult.participantIdentity.player.summonerId;
    const { trophiesObtained } = this.state;

    if (!trophiesObtained[summonerId]) {
      return <LoadingComponent />;
    }
    const sortedTrophyObtained = trophiesObtained[summonerId].sort((a, b) => {
      const aDefinition = trophies[a.name];
      const bDefinition = trophies[b.name];
      return (
        bDefinition.score - aDefinition.score || aDefinition.title.localeCompare(bDefinition.title)
      );
    });

    let earnedTrophyPoints = 0;
    const allTrophiesObtainedIcons = sortedTrophyObtained.map(trophyObtained => {
      const trophy = trophies[trophyObtained.name];
      if (!trophy) {
        return <span key={trophyObtained.name} />;
      }

      const { newInTree, isNew } = trophyObtained;
      earnedTrophyPoints += trophy.score;
      let badge;
      if (newInTree && isNew) {
        badge = 'firstTimeAndActiveQuest';
        earnedTrophyPoints += getFirstTimeBonus(trophy);
        earnedTrophyPoints += getTreeBonus(trophy);
      } else if (newInTree) {
        badge = 'activeQuest';
        earnedTrophyPoints += getTreeBonus(trophy);
      } else if (isNew) {
        badge = 'firstTime';
        earnedTrophyPoints += getFirstTimeBonus(trophy);
      }
      return (
        <Trophy
          badge={badge}
          forceColors={true}
          key={trophy.name}
          showPoints={true}
          trophy={trophy}
        />
      );
    });
    let obtainedMessage;
    if (allTrophiesObtainedIcons.length) {
      obtainedMessage = `Congratulations! You obtained ${
        allTrophiesObtainedIcons.length
      } trophies and earned ${earnedTrophyPoints} Points!`;
    } else {
      obtainedMessage = "Sadly you didn't obtain a trophy.";
    }

    return (
      <div>
        <div>{obtainedMessage}</div>
        <div>
          <HorizontalScroll key={`${summonerId}-trophies`}>
            {allTrophiesObtainedIcons}
          </HorizontalScroll>
        </div>
      </div>
    );
  }
}

export default TrophiesObtained;
