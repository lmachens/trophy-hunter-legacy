import Link from 'next/link';
import React from 'react';

const About = () => (
  <div>
    <p>This is the about page</p>
    <Link href="/">
      <a>Go home</a>
    </Link>
  </div>
);

export default About;
