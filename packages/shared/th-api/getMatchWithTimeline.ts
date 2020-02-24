import axios from 'axios';
import getMatch from './getMatch';
import getTimeline from './getTimeline';

const getMatchWithTimeline = ({ platformId, matchId }) => {
  return Promise.all([
    getMatch({ platformId, matchId }),
    getTimeline({ platformId, matchId })
  ]).then(
    axios.spread((match, timeline) => {
      match.timeline = timeline;
      return match;
    })
  );
};

export default getMatchWithTimeline;
