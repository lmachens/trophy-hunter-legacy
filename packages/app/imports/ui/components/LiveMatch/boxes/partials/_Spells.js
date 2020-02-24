import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Spell } from './_Spell';
import { withStyles } from '../../../generic';

const styles = {};

class Spells extends PureComponent {
  render() {
    const { spell1Id, spell2Id } = this.props;

    return (
      <div>
        <Spell spellId={spell1Id} />
        <Spell spellId={spell2Id} />
      </div>
    );
  }
}

Spells.propTypes = {
  classes: PropTypes.object.isRequired,
  spell1Id: PropTypes.number,
  spell2Id: PropTypes.number
};

const enhanced = withStyles(styles)(Spells);

export { enhanced as Spells };
