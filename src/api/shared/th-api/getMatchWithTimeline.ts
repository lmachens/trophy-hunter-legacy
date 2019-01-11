import axios from 'axios';
import getMatch from './getMatch';
import getTimeline from './getTimeline';

const getMatchWithTimeline = ({ platformId, matchId, version = 'v4' }) => {
  return axios
    .all([
      getMatch({ platformId, matchId, version }),
      getTimeline({ platformId, matchId, version })
    ])
    .then(
      axios.spread((match, timeline) => {
        match.timeline = timeline;
        return match;
      })
    );
};

export default getMatchWithTimeline;
