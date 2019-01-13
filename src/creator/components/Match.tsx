import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { JSONEditorProps } from './types';
import LoadMatch from './LoadMatch';
//import extendMatchResult from '../shared/matches/extendMatchResult';

const DynamicJSONEditor = dynamic<JSONEditorProps>(import('./JSONEditor') as any, { ssr: false });

const Match = () => {
  const [match, setMatch] = useState({});
  const [extendedMatch, setExtendedMatch] = useState({});

  useEffect(
    () => {
      try {
        //const extendedMatchResult = extendMatchResult({ matchResult: match });
        //setExtendedMatch(extendedMatchResult);
      } catch (error) {
        console.error(error.message);
      }
    },
    [match]
  );
  console.log(match);
  return (
    <div>
      <LoadMatch onLoad={setMatch} />
      <DynamicJSONEditor
        json={match}
        onChangeText={console.log}
        onChangeJSON={console.warn}
        onValidate={json => {
          //setMatch(json);
          return [];
        }}
        mode="code"
      />
    </div>
  );
};

export default Match;
