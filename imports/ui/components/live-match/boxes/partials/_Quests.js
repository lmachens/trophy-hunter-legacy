import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Trophy } from './_Trophy';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import getActiveQuestTrophies from '../../../../../api/trophies/getActiveQuestTrophies';
import { withStyles } from '../../../generic';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class Quests extends PureComponent {
  render() {
    const { classes, trophyHunter } = this.props;

    const questTrophies = getActiveQuestTrophies(trophyHunter);
    return (
      <div className={classes.container}>
        {questTrophies &&
          questTrophies
            .sort((a, b) => b.score - a.score)
            .map(trophy => {
              return <Trophy key={trophy.name} trophy={trophy} />;
            })}
        {!questTrophies && 'No quests available'}
      </div>
    );
  }
}

Quests.propTypes = {
  classes: PropTypes.object.isRequired,
  trophyHunter: PropTypes.object
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return {
    trophyHunter
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Quests);

export { enhanced as Quests };
