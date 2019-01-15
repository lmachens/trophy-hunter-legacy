import React from 'react';
import Link from 'next/link';

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
