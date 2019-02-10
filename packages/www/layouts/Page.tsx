import React, { FunctionComponent } from 'react';
import Footer from '../components/Footer';

const PageLayout: FunctionComponent = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default PageLayout;
