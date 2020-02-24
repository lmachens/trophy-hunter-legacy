import Link from 'next/link';
import React from 'react';

const Header = () => (
  <header>
    <Link href="/">
      <button>Matches</button>
    </Link>
    <Link href="/static-data">
      <button>Static Data</button>
    </Link>
  </header>
);

export default Header;
