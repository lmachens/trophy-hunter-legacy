import React, { useEffect, useState, FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import { JSONEditorProps } from './types';
import LoadMatch from './LoadMatch';

const DynamicJSONEditor = dynamic<JSONEditorProps>(import('./JSONEditor') as any, { ssr: false });

const Match = () => {
  const [match, setMatch] = useState({});
  const [extendedMatch, setExtendedMatch] = useState({});

  useEffect(() => {}, []);
  console.log(match);
  return (
    <div>
      <LoadMatch onLoad={setMatch} />
      <DynamicJSONEditor json={match} onChange={setMatch} mode="form" />
      <DynamicJSONEditor json={match} mode="tree" />
    </div>
  );
};

export default Match;
