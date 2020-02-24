import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const useStyles = makeStyles(theme => ({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: {
    ...theme.mixins.toolbar
  }
}));

const PageLayout: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
