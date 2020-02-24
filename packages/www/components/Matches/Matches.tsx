import Match from 'components/Match';
import React, { FunctionComponent } from 'react';
import { IMatchWithTimeline } from 'shared/riot-api/typings';

interface MatchesProps {
  matches: IMatchWithTimeline[];
  summonerName: string;
}

const Matches: FunctionComponent<MatchesProps> = ({ matches, summonerName }) => {
  return (
    <>
      {matches.map(match => (
        <Match key={match.gameId} match={match} summonerName={summonerName} />
      ))}
    </>
  );
};

export default Matches;
