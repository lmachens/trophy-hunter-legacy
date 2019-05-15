import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import LoadMatch from '../components/LoadMatch';
import Page from '../layouts/Page';
import extendMatchResult from '../shared/matches/extendMatchResult';
import calculateTrophies from '../shared/trophies/calculateTrophies';
import { JSONEditorProps } from '../types';

const DynamicJSONEditor = dynamic<JSONEditorProps>(import('../components/JSONEditor') as any, {
  ssr: false
});

const styles: any = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  actions: {
    display: 'flex'
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
    localStorage.setItem(matchKey, JSON.stringify(text));
  }
};
const Match = () => {
  const [match, setMatch] = useState(lastMatch);
  const [platformId, setPlatformId] = useState('euw1');
  const [matchId, setMatchId] = useState('3795861223');

  const [participants, setParticipants] = useState('Loading');

  useEffect(() => {}, []);

  const handleValidate = json => {
    try {
      const result = json.participantIdentities.reduce((result, participantIdentity) => {
        if (json.gameMode === 'TUTORIAL_MODULE_2') {
          throw new Error('invalid game mode');
        }

        const extendedMatchResult = extendMatchResult({
          matchResult: json,
          summonerName: participantIdentity.player.summonerName
        });

        const stats = extendedMatchResult.participant.stats;
        console.log(extendedMatchResult.team);
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

  const handlePlatformIdChange = event => {
    setPlatformId(event.target.value);
  };

  const handleMatchIdChange = event => {
    setMatchId(event.target.value);
  };

  return (
    <Page>
      <div style={styles.container}>
        <div style={styles.actions}>
          <input onChange={handlePlatformIdChange} value={platformId} placeholder="platform id" />
          <input onChange={handleMatchIdChange} value={matchId} placeholder="match id" />
          <LoadMatch onLoad={handleLoad} platformId={platformId} matchId={matchId} />
        </div>
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
    </Page>
  );
};

export default Match;
