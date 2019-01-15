import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { JSONEditorProps } from './types';
import LoadMatch from './LoadMatch';
import extendMatchResult from '../shared/matches/extendMatchResult';
import calculateTrophies from '../shared/trophies/calculateTrophies';

const DynamicJSONEditor = dynamic<JSONEditorProps>(import('./JSONEditor') as any, { ssr: false });

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  views: {
    flex: 1,
    display: 'flex',
    height: '100%'
  }
};

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
      const result = json.participantIdentities.reduce((result, participantIdentity) => {
        const extendedMatchResult = extendMatchResult({
          matchResult: json,
          summonerName: participantIdentity.player.summonerName
        });
        const stats = extendedMatchResult.participant.stats;
        const trophies = calculateTrophies({ extendedMatchResult });
        result[participantIdentity.player.summonerName] = {
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
    // @ts-ignore
    <div style={styles.container}>
      <LoadMatch onLoad={handleLoad} />
      <div style={styles.views}>
        <DynamicJSONEditor
          json={match}
          onValidate={handleValidate}
          mode="code"
          onChangeText={handleChangeText}
        />
        <DynamicJSONEditor json={participants} mode="tree" />
      </div>
    </div>
  );
};

export default Match;
