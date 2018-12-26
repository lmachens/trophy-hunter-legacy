import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';
import { getItemById } from '../../../../../api/riot-api/staticData';
import riotItems from '../../../../../api/riot-api/static/items';
import { withStyles } from '../../../generic';

const styles = {
  item: {
    height: 24,
    width: 24,
    margin: 2
  }
};

class Item extends PureComponent {
  render() {
    const { classes, itemId } = this.props;

    const riotItem = riotItems.data[itemId] || {};
    return (
      <Tooltip
        title={
          <TooltipTitle
            content={riotItem.sanitizedDescription}
            title={riotItem.name || 'No Item'}
          />
        }
      >
        <img className={classes.item} src={getItemById(itemId)} />
      </Tooltip>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const enhanced = withStyles(styles)(Item);

export { enhanced as Item };
