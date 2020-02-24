import React from 'react';

import HorizontalScroll from '../generic/HorizontalScroll';
import PropTypes from 'prop-types';
import Trophy from '../Trophy';
import getActiveQuestTrophies from '../../../api/trophies/getActiveQuestTrophies';

const ActiveQuests = ({ style, trophyHunter }) => {
  const questTrophies = getActiveQuestTrophies(trophyHunter);

  return (
    <div style={style}>
      <span>Active Quests</span>
      <div>
        <HorizontalScroll>
          {questTrophies &&
            questTrophies
              .sort((a, b) => b.score - a.score)
              .map((trophy, index) => {
                const trophyObtained =
                  trophyHunter && trophyHunter.trophiesObtained.find(t => t.name === trophy.name);

                return (
                  <Trophy
                    forceColors={true}
                    key={`${trophy.name}-${index}`}
                    obtainedCount={trophyObtained ? trophyObtained.count : 0}
                    trophy={trophy}
                  />
                );
              })}
        </HorizontalScroll>
      </div>
    </div>
  );
};

ActiveQuests.propTypes = {
  style: PropTypes.object,
  trophyHunter: PropTypes.object
};

export default ActiveQuests;
