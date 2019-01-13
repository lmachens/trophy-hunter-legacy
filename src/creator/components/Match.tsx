import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { JSONEditorProps } from './types';
import LoadMatch from './LoadMatch';
import extendMatchResult from '../shared/matches/extendMatchResult';

const DynamicJSONEditor = dynamic<JSONEditorProps>(import('./JSONEditor') as any, { ssr: false });

const Match = () => {
  const [match, setMatch] = useState({});
  const [extendedMatch, setExtendedMatch] = useState({ a: 2 });

  useEffect(() => {}, []);

  const handleValidate = json => {
    try {
      const extendedMatchResult = extendMatchResult({ matchResult: match });
      //setExtendedMatch(extendedMatchResult);
    } catch (error) {}
    setExtendedMatch(json);
    return [];
  };

  return (
    <div>
      <LoadMatch onLoad={setMatch} />
      <DynamicJSONEditor json={match} onValidate={handleValidate} mode="code" />
      <DynamicJSONEditor json={extendedMatch} mode="tree" />
    </div>
  );
};

export default Match;
