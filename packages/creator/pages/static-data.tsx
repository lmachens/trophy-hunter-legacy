import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import getStaticData from '../api/getStaticData';
import Page from '../layouts/Page';
import { JSONEditorProps } from '../types';

const DynamicJSONEditor = dynamic<JSONEditorProps>(import('../components/JSONEditor') as any, {
  ssr: false
});

const StaticData = () => {
  const [version, setVersion] = useState('9.5.1');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const version = event.target.elements.version.value;
    setLoading(true);
    getStaticData(version)
      .then(setResult)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const handleCopy = key => () => {
    const copyText: any = document.getElementById('copy');
    copyText.value = JSON.stringify(result[key], null, 2);
    copyText.select();

    document.execCommand('copy');
  };

  const handleVersionChange = event => {
    setVersion(event.target.value);
  };

  return (
    <Page>
      <form onSubmit={handleSubmit} noValidate>
        <input name="version" value={version} onChange={handleVersionChange} />
        <button type="submit" disabled={loading}>
          Get Static Data
        </button>
      </form>
      <textarea id="copy" style={{ position: 'fixed' }} />
      <DynamicJSONEditor json={result} mode="tree" />
      <button onClick={handleCopy('items')} disabled={!result}>
        Copy Items
      </button>
      <button onClick={handleCopy('summonerSpells')} disabled={!result}>
        Copy Summoner Spells
      </button>
      <button onClick={handleCopy('champions')} disabled={!result}>
        Copy Champions
      </button>
      <button onClick={handleCopy('runes')} disabled={!result}>
        Copy Runes
      </button>
      <button onClick={handleCopy('perks')} disabled={!result}>
        Copy Perks
      </button>
    </Page>
  );
};

export default StaticData;
