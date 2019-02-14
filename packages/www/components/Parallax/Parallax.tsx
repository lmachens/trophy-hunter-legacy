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
  const ref = useRef(null);

  useEffect(() => {
    resetTransform();

    window.addEventListener('scroll', resetTransform);

    return () => {
      window.removeEventListener('scroll', resetTransform);
    };
  }, []);

  const calculateTransform = () => {
    const offsetTop = ref.current.offsetTop;
    const { pageYOffset, innerHeight } = window;
    const isVisible = innerHeight - pageYOffset + offsetTop > 0;
    const windowScrollTop = isVisible ? (pageYOffset - offsetTop) / 3 : 0;
    return 'translate3d(0,' + windowScrollTop + 'px,0)';
  };

  const resetTransform = () => {
    setTransform(calculateTransform());
  };

  const parallaxClasses = classNames({
    [classes.parallax]: true
  });
  return (
    <div className={parallaxClasses} ref={ref}>
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
