import React from 'react';
import Header from '../components/Header';

const Page = ({ children }) => (
  <>
    <style>{`
      html,
      body,
      #__next {
        height: 100%;
        margin: 0;
      }
    `}</style>
    <Header />
    <main style={{ height: '100%' }}>{children}</main>
  </>
);

export default Page;
