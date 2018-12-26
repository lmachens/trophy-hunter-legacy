import { Button, Dialog, GridList, GridTile } from '../../components/generic';
import React, { Component } from 'react';

import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import items from '../../../api/items/items';
import universeTheme from '../../layouts/universeTheme';

const styles = {
  container: {
    height: '100%',
    position: 'relative'
  },
  background: {
    position: 'absolute',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  foreground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: '2px'
  },
  gridList: {
    width: '100%'
  },
  gridElement: {
    background: 'rgba(1, 47, 62, 0.65)',
    height: '100%',
    textAlign: 'center',
    cursor: 'pointer'
    //paddingBottom: '68px'
  }
};

class ItemsPage extends Component {
  state = {
    valid: false,
    open: false,
    item: {},
    details: {}
  };

  render() {
    const { trophyHunter } = this.props;

    const backgroundStyle = Object.assign(
      {
        backgroundImage:
          'url(//universe-meeps.leagueoflegends.com/v1/assets/images/factions/image-gallery/demacia-silvermere.jpg)',
        filter: universeTheme.boxBackground.filter,
        opacity: universeTheme.boxBackground.opacity
      },
      styles.background
    );

    return (
      <div style={styles.container}>
        <div style={backgroundStyle} />
        <div style={styles.foreground}>
          <GridList cellHeight={180} cols={3} padding={8} style={styles.gridList}>
            {items.map((item, index) => {
              const purchased = trophyHunter && trophyHunter.items[item.name];
              const earn = item.trophyPoints > 0;
              let subtitle;
              if (item.subtitle) {
                subtitle = item.subtitle;
              } else if (purchased) {
                subtitle = earn ? 'Earned' : 'Purchased';
              } else if (earn) {
                subtitle = `Earn ${item.trophyPoints} TP`;
              } else {
                subtitle = `Unlock for ${item.trophyPoints * -1} TP`;
              }
              return (
                <GridTile
                  key={index}
                  onClick={this.handleOrder.bind(this, item)}
                  style={styles.gridElement}
                  subtitle={subtitle}
                  title={item.title}
                  titleBackground="rgba(0, 0, 0, 0.7)"
                >
                  <div style={{ height: '100%' }}>
                    <img
                      src={item.img}
                      style={{
                        minHeight: '100%',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                </GridTile>
              );
            })}
          </GridList>
          {this.renderDialog()}
        </div>
      </div>
    );
  }

  renderDialog() {
    const { trophyHunter } = this.props;
    const { item, valid } = this.state;

    const purchased = trophyHunter && trophyHunter.items[item.name];

    const actions = [];
    if (item.trophyPoints) {
      let label;
      if (purchased) {
        label = 'Edit';
      } else if (item.trophyPoints > 0) {
        label = `Earn ${item.trophyPoints} TP`;
      } else {
        label = `Unlock for ${item.trophyPoints * -1} TP`;
      }
      const disabled =
        (!purchased && (!trophyHunter || !(trophyHunter.trophyPoints + item.trophyPoints > 0))) ||
        (!valid && !item.isDownloadable);
      actions.push(
        <Button
          disabled={disabled}
          key="unlock"
          label={label}
          onClick={this.handleUnlock}
          style={{
            zIndex: 0,
            display: item.isDownloadable && purchased ? 'none' : 'inline-block'
          }}
        />
      );
    }
    actions.push(
      <Button key="close" label="Close" onClick={this.handleClose} style={{ zIndex: 0 }} />
    );

    return (
      item.component && (
        <Dialog
          actions={actions}
          onClose={this.handleClose}
          open={this.state.open}
          style={{ textAlign: 'center' }}
          title={item.title}
        >
          <item.component onChange={this.handleChange} />
        </Dialog>
      )
    );
  }

  handleChange = (details, valid) => {
    this.setState({ details, valid });
  };

  handleUnlock = () => {
    const { valid, details, item } = this.state;
    if (valid || item.isDownloadable) {
      Meteor.call('unlockItem', item.name, details, error => {
        if (error) {
          console.log(error);
        }
      });
      this.setState({ valid: false });
    }
  };

  handleOrder(item) {
    if (item.onClick) {
      item.onClick();
    } else {
      this.setState({ open: true, item: item, valid: false, details: {} });
    }
  }

  handleClose = () => {
    this.setState({ open: false, item: {} });
  };
}

ItemsPage.propTypes = {
  trophyHunter: PropTypes.object
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return { trophyHunter };
};

export default connect(mapStateToProps)(ItemsPage);
