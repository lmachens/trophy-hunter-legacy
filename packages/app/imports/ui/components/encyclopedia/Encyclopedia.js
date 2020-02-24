import { Attributes, AttributesNavigation } from './Attributes';
import { Dialog } from '../generic';
import { Button } from '@material-ui/core';
import { Playstyles, PlaystylesNavigation } from './Playstyles';
import React, { Component } from 'react';
import { Trees, TreesNavigation } from './Trees';
import { Trophies, TrophiesNavigation } from './Trophies';
import { closeEncyclopedia, openEncyclopediaEntry } from '../../../store/actions';

import Layout from './Layout';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const TABS = {
  TREES: 'Trees',
  TROPHIES: 'Trophies',
  PLAYSTYLES: 'Playstyles',
  ATTRIBUTES: 'Attributes'
};

class Encyclopedia extends Component {
  handleChange = tab => (event, value) => {
    const { openEncyclopediaEntry } = this.props;
    openEncyclopediaEntry({ open: true, tab, value });
  };

  handleClose = () => {
    const { closeEncyclopedia } = this.props;
    closeEncyclopedia({ open: false });
  };

  render() {
    const { open, value, tab } = this.props;
    console.log('render encyclopedia');
    return (
      <Dialog
        fullscreen={true}
        noPadding={true}
        onClose={this.handleClose}
        open={open}
        title={
          <div style={{ clear: 'both' }}>
            <Button
              color={tab === TABS.TREES ? 'primary' : 'inherit'}
              onClick={this.handleChange(TABS.TREES)}
            >
              Trees
            </Button>
            <Button
              color={tab === TABS.TROPHIES ? 'primary' : 'inherit'}
              onClick={this.handleChange(TABS.TROPHIES)}
            >
              Trophies
            </Button>
            <Button
              color={tab === TABS.PLAYSTYLES ? 'primary' : 'inherit'}
              onClick={this.handleChange(TABS.PLAYSTYLES)}
            >
              Playstyles
            </Button>
            <Button
              color={tab === TABS.ATTRIBUTES ? 'primary' : 'inherit'}
              onClick={this.handleChange(TABS.ATTRIBUTES)}
            >
              Attributes
            </Button>
          </div>
        }
      >
        {tab === TABS.TREES && (
          <Layout
            content={<Trees value={value} />}
            navigation={<TreesNavigation onChange={this.handleChange(TABS.TREES)} value={value} />}
          />
        )}
        {tab === TABS.TROPHIES && (
          <Layout
            content={<Trophies value={value} />}
            navigation={
              <TrophiesNavigation onChange={this.handleChange(TABS.TROPHIES)} value={value} />
            }
          />
        )}
        {tab === TABS.PLAYSTYLES && (
          <Layout
            content={<Playstyles value={value} />}
            navigation={
              <PlaystylesNavigation onChange={this.handleChange(TABS.PLAYSTYLES)} value={value} />
            }
          />
        )}
        {tab === TABS.ATTRIBUTES && (
          <Layout
            content={<Attributes value={value} />}
            navigation={
              <AttributesNavigation onChange={this.handleChange(TABS.ATTRIBUTES)} value={value} />
            }
          />
        )}
      </Dialog>
    );
  }
}

Encyclopedia.propTypes = {
  open: PropTypes.bool.isRequired,
  value: PropTypes.any,
  tab: PropTypes.string,
  closeEncyclopedia: PropTypes.func.isRequired,
  openEncyclopediaEntry: PropTypes.func.isRequired
};

const mapStateToProps = ({ encyclopediaDialog: { open, value, tab } }) => {
  return { open, value, tab };
};

const mapDispatchToProps = dispatch => {
  return {
    openEncyclopediaEntry: bindActionCreators(openEncyclopediaEntry, dispatch),
    closeEncyclopedia: bindActionCreators(closeEncyclopedia, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Encyclopedia);
