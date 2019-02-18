import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

interface IParallaxProps {
  small: string;
  big: string;
  backgroundSize?: string;
  backgroundPosition?: string;
}

const useStyles = makeStyles(theme => ({
  parallax: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 0
  },
  filter: (props: any) => ({
    position: 'absolute',
    top: 0,
    zIndex: -1,
    width: '100%',
    height: '100vh',
    backgroundPosition: props.backgroundPosition,
    backgroundSize: props.backgroundSize,
    backgroundImage: `url(${props.small})`,
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${props.big})`
    }
  }),
  small: {
    height: '380px'
  }
}));

const calculateTransform = () => {
  const windowScrollTop = window.pageYOffset / 3;
  return 'translate3d(0,' + windowScrollTop + 'px,0)';
};

const Parallax: FunctionComponent<IParallaxProps> = ({
  backgroundSize = 'cover',
  backgroundPosition = 'center center',
  children,
  small,
  big
}) => {
  const classes = useStyles({
    backgroundSize,
    backgroundPosition,
    small,
    big
  });
  const [transform, setTransform] = useState('');
  const ticking = useRef(false);

  useEffect(() => {
    resetTransform();

    window.addEventListener('scroll', resetTransform);

    return () => {
      window.removeEventListener('scroll', resetTransform);
    };
  }, []);

  const resetTransform = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setTransform(calculateTransform());
        ticking.current = false;
      });

      ticking.current = true;
    }
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
