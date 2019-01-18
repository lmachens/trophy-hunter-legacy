import Link from 'next/link';
import React from 'react';

const Landing = ({ url }) => (
  <div>
    <p>This is the home page. URL: {JSON.stringify(url)}</p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Landing;
