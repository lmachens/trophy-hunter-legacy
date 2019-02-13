import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import trophies from '../../shared/trophies';
import Trophy from '../Trophy';

interface ITrophiesProps {
  trophiesObtained?: any[];
}

const useStyles = makeStyles({
  container: {}
});

const Trophies: FunctionComponent<ITrophiesProps> = ({ trophiesObtained }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {Object.values(trophies)
        .sort((a, b) => a.score - b.score || a.title.localeCompare(b.title))
        .map(trophy => {
          const obtained = !!trophiesObtained.find(
            trophyObtained => trophyObtained.name === trophy.name
          );
          return <Trophy key={trophy.name} trophy={trophy} obtained={obtained} />;
        })}
    </div>
  );
};

export default Trophies;
