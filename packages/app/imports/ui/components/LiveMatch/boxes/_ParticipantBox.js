import { Box, BoxBackground, BoxContent, Typography, withStyles } from '../../generic';
import React, { PureComponent } from 'react';

import { Participant } from './partials/_Participant';
import PropTypes from 'prop-types';
import champions from '/imports/shared/riot-api/champions.ts';

const styles = {
  noParticipant: {
    paddingTop: 37,
    textAlign: 'center'
  }
};

class ParticipantBox extends PureComponent {
  render() {
    const { classes, className, participant, ...other } = this.props;
    return (
      <Box className={className}>
        {participant && (
          <BoxBackground
            imageUrl={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[participant.championId.toString()].key}_0.jpg`}
          />
        )}
        <BoxContent>
          {participant && <Participant participant={participant} {...other} />}
          {!participant && (
            <Typography className={classes.noParticipant}>No Participant</Typography>
          )}
        </BoxContent>
      </Box>
    );
  }
}

ParticipantBox.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  participant: PropTypes.object
};

const enhance = withStyles(styles)(ParticipantBox);
export { enhance as ParticipantBox };
