import { withStyles } from '../../../generic';
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { getSummonerSpellById } from '../../../../../api/riot-api/staticData';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';
import summonerSpells from '../../../../../api/riot-api/static/summonerSpells';

const styles = {
  spell: {
    height: 24,
    width: 24
  }
};

class Spell extends PureComponent {
  render() {
    const { classes, spellId } = this.props;

    const spell = summonerSpells.data[spellId] || {};

    return (
      <Tooltip title={<TooltipTitle content={spell.description} title={spell.name} />}>
        <img className={classes.spell} src={getSummonerSpellById(spellId)} />
      </Tooltip>
    );
  }
}

Spell.propTypes = {
  classes: PropTypes.object.isRequired,
  spellId: PropTypes.number
};

const enhanced = withStyles(styles)(Spell);

export { enhanced as Spell };
