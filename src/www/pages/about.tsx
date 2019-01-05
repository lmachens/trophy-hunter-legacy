import React from 'react';
import Link from 'next/link';
import Header from '../components/header';

export default () => (
  <main>
    <Header />
    <p>This is the about page</p>
    <Link href="/">
      <a>Go home</a>
    </Link>
  </main>
);
