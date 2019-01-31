import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import TitleDivider from '../TitleDivider';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const screenshots = [
  {
    label: 'Overlay',
    imgPath: '/static/screenshots/1.jpg'
  },
  {
    label: 'Trees',
    imgPath: '/static/screenshots/2.jpg'
  },
  {
    label: 'Trophies',
    imgPath: '/static/screenshots/3.jpg'
  },
  {
    label: 'Match',
    imgPath: '/static/screenshots/4.jpg'
  },
  {
    label: 'RP Lottery',
    imgPath: '/static/screenshots/5.jpg'
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundImage: 'url(/static/screenshots.jpg)',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  },
  slideshow: {
    maxWidth: 1000,
    margin: '0 auto'
  },
  subtitle: {
    marginTop: 40
  },
  divider: {
    width: 200,
    maxWidth: '100%',
    margin: '20px auto',
    borderTop: '2px solid',
    color: theme.palette.secondary.main
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%'
  }
}));

const Screenshots = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <section className={classes.container} id="screenshots">
      <div className={classes.slideshow}>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={5000}
        >
          {screenshots.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        />
      </div>
    </section>
  );
};

export default Screenshots;
