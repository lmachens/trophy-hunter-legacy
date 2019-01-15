import React from 'react';
import Match from '../components/Match';

export default () => (
  <>
    <style>{`
      html,
      body,
      #__next {
        height: 100%;
        margin: 0;
      }
    `}</style>
    <main style={{ height: '100%' }}>
      <Match />
    </main>
  </>
);
