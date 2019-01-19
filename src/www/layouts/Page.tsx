import React, { FunctionComponent } from 'react';
import Header from '../components/Header';

const PageLayout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default PageLayout;
