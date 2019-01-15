import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { JSONEditorProps } from './types';
import LoadMatch from './LoadMatch';
import extendMatchResult from '../shared/matches/extendMatchResult';
import calculateTrophies from '../shared/trophies/calculateTrophies';

const DynamicJSONEditor = dynamic<JSONEditorProps>(import('./JSONEditor') as any, { ssr: false });

const matchKey = 'th-creator-match';
let lastMatch;
try {
  const storedMatch = typeof localStorage === 'object' && localStorage.getItem(matchKey);
  lastMatch = JSON.parse(storedMatch);
} catch (error) {
  lastMatch = 'Load a match first';
}
const handleChangeText = text => {
  console.log(text);
  if (typeof localStorage === 'object') {
    localStorage.setItem(matchKey, text);
  }
};
const Match = () => {
  const [match, setMatch] = useState(lastMatch);
  const [participants, setParticipants] = useState('Loading');

  useEffect(() => {}, []);

  const handleValidate = json => {
    try {
      const extendedMatchResult = extendMatchResult({
        matchResult: json,
        matchExtensionParameters: {
          withTimeline: true,
          extendAllParticipants: true,
          extendStatsParticipantIds: [],
          extendParticipants: []
        }
      });

      const result = extendedMatchResult.participants.reduce((result, participant) => {
        
        const stats = participant.stats;
        const trophies = calculateTrophies({ extendedMatchResult });
        result[participant.participantId] = {
          stats,
          trophies
        };
        return result;
      }, {});
      setParticipants(result);
    } catch (error) {
      console.error(error);
      setParticipants(error.message);
    }

    return [];
  };

  const handleLoad = value => {
    setMatch(value);
    handleChangeText(value);
  };

  return (
    <div>
      <LoadMatch onLoad={handleLoad} />
      <DynamicJSONEditor
        json={match}
        onValidate={handleValidate}
        mode="code"
        onChangeText={handleChangeText}
      />
      <DynamicJSONEditor json={participants} mode="tree" />
    </div>
  );
};

export default Match;
