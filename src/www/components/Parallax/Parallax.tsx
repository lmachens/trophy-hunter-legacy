import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';

const useStyles = makeStyles({
  parallax: {
    height: '100vh',
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filter: {
    filter: 'brightness(.5) grayscale(100%)',
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  small: {
    height: '380px'
  }
});

const calculateTransform = () => {
  const windowScrollTop = window.pageYOffset / 3;
  return 'translate3d(0,' + windowScrollTop + 'px,0)';
};

interface ParallaxProps {
  filter?: boolean;
  image: string;
  small?: boolean;
}

const Parallax: FunctionComponent<ParallaxProps> = ({ filter, children, image, small }) => {
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
    [classes.parallax]: true,
    [classes.small]: small
  });
  return (
    <div className={parallaxClasses}>
      <div
        className={classes.filter}
        style={{
          backgroundImage: 'url(' + image + ')',
          transform
        }}
      />
      {children}
    </div>
  );
};

export default Parallax;
