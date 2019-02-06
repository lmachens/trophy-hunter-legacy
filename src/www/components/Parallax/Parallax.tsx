import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  parallax: {
    height: 'calc(100vh - 36px)',
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filter: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: 'url(/static/bg_small.jpg)',
    [theme.breakpoints.up('md')]: {
      backgroundImage: 'url(/static/bg_big.jpg)'
    }
  },
  small: {
    height: '380px'
  }
}));

const calculateTransform = () => {
  const windowScrollTop = window.pageYOffset / 3;
  return 'translate3d(0,' + windowScrollTop + 'px,0)';
};

const Parallax: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const [transform, setTransform] = useState('');

  useEffect(() => {
    resetTransform();

    window.addEventListener('scroll', resetTransform);

    return () => {
      window.removeEventListener('scroll', resetTransform);
    };
  }, []);

  const resetTransform = () => {
    setTransform(calculateTransform());
  };

  const parallaxClasses = classNames({
    [classes.parallax]: true
  });
  return (
    <div className={parallaxClasses}>
      <div
        className={classes.filter}
        style={{
          transform
        }}
      />
      {children}
    </div>
  );
};

export default Parallax;
