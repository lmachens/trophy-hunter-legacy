import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '../../../generic';
import { Item } from './_Item';

const styles = {
  container: {
    display: 'inline-flex'
  }
};

class Items extends PureComponent {
  render() {
    const { classes, item0, item1, item2, item3, item4, item5, item6 } = this.props;

    return (
      <div className={classes.container}>
        <Item itemId={item0} />
        <Item itemId={item1} />
        <Item itemId={item2} />
        <Item itemId={item3} />
        <Item itemId={item4} />
        <Item itemId={item5} />
        <Item itemId={item6} />
      </div>
    );
  }
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  item0: PropTypes.number,
  item1: PropTypes.number,
  item2: PropTypes.number,
  item3: PropTypes.number,
  item4: PropTypes.number,
  item5: PropTypes.number,
  item6: PropTypes.number
};

const enhanced = withStyles(styles)(Items);

export { enhanced as Items };
