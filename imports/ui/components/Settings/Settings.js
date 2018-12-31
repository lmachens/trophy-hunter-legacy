import '../../../api/trophy-hunters/methods';

import { Button, Checkbox } from '../generic';
import {
  MATCHMAKING,
  activeMatchModes,
  gameQueueConfigIdLabels
} from '../../../api/riot-api/gameConstants';
import React, { Component } from 'react';

import HelpBox from '../HelpBox';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import TrophyHunters from '../../../api/trophy-hunters/trophyHunters';
import { getSetting } from '../../../api/trophy-hunters/helpers';
import { withTracker } from 'meteor/react-meteor-data';

const styles = {
  container: {
    textAlign: 'center'
  },
  hotkey: {
    margin: '0 auto'
  },
  matchModes: {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '0 100px'
  },
  matchMode: {
    width: 250,
    textAlign: 'left'
  },
  matchResult: {
    width: 'initial',
    whiteSpace: 'nowrap',
    margin: '0 auto',
    textAlign: 'left'
  }
};

class Settings extends Component {
  state = Object.assign(
    {
      tab: 'autostart',
      'matchResults.avoidOpenWhenAnalysed': !(
        this.props.trophyHunter &&
        !getSetting(this.props.trophyHunter, 'matchResults', 'avoidOpenWhenAnalysed')
      )
    },
    ...activeMatchModes.map(matchMode => {
      const { trophyHunter } = this.props;
      const noAutoRunMatchMode =
        trophyHunter && getSetting(trophyHunter, 'overlay', 'noAutorun', matchMode);
      return { [`overlay.noAutorun.${matchMode}`]: noAutoRunMatchMode };
    })
  );

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      (nextProps.trophyHunter && nextProps.trophyHunter._id) !==
      (this.props.trophyHunter && this.props.trophyHunter._id)
    ) {
      this.setState(
        Object.assign(
          {
            'matchResults.avoidOpenWhenAnalysed': !(
              nextProps.trophyHunter &&
              !getSetting(nextProps.trophyHunter, 'matchResults', 'avoidOpenWhenAnalysed')
            )
          },
          ...activeMatchModes.map(matchMode => {
            const { trophyHunter } = nextProps;
            const noAutoRunMatchMode =
              trophyHunter && getSetting(trophyHunter, 'overlay', 'noAutorun', matchMode);
            return { [`overlay.noAutorun.${matchMode}`]: noAutoRunMatchMode };
          })
        )
      );
    }
  }

  handleHotkeysClick = () => {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'openHotkeys'
      },
      '*'
    );
  };

  handleCheck = (event, isInputChecked, field) => {
    this.setState({
      [field]: isInputChecked
    });

    Meteor.call('updateSettings', field, !isInputChecked, console.log);
  };

  setTab = tab => () => {
    this.setState({ tab });
  };

  render() {
    const { trophyHunter } = this.props;
    const { tab } = this.state;

    return (
      <div style={styles.container}>
        <div>
          <Button
            label="Autostart"
            onClick={this.setTab('autostart')}
            primary={tab === 'autostart'}
          />
          <Button label="Hotkey" onClick={this.setTab('hotkey')} primary={tab === 'hotkey'} />
          <Button
            label="Match Results"
            onClick={this.setTab('matchResults')}
            primary={tab === 'matchResults'}
          />
        </div>
        {tab === 'autostart' && (
          <div>
            <HelpBox>
              Trophy Hunter will start when your League client is started, but you can control the
              overlay autorun depending on match mode. You can still open the overlay with the
              hotkey.
            </HelpBox>
            <div style={styles.matchModes}>
              {activeMatchModes.map(matchMode => (
                <Checkbox
                  checked={!this.state[`overlay.noAutorun.${matchMode}`]}
                  disabled={!trophyHunter}
                  key={matchMode}
                  label={gameQueueConfigIdLabels[MATCHMAKING[matchMode]]}
                  onCheck={(event, isInputChecked) =>
                    this.handleCheck(event, !isInputChecked, `overlay.noAutorun.${matchMode}`)
                  }
                  style={styles.matchMode}
                />
              ))}
            </div>
          </div>
        )}
        {tab === 'hotkey' && (
          <div>
            <HelpBox>
              You can open the Overlay with the Hotkey while ingame. Change it, if you have
              conflicts with other apps.
            </HelpBox>
            <Button label="Change Hotkey" onClick={this.handleHotkeysClick} style={styles.hotkey} />
          </div>
        )}
        {tab === 'matchResults' && (
          <div>
            <HelpBox>
              After match end it takes about 30 seconds to analyse it. You can control, if the
              results opens when analysed.
            </HelpBox>
            <Checkbox
              checked={!this.state['matchResults.avoidOpenWhenAnalysed']}
              disabled={!trophyHunter}
              label="Open when analysed"
              onCheck={(event, isInputChecked) =>
                this.handleCheck(event, !isInputChecked, 'matchResults.avoidOpenWhenAnalysed')
              }
              style={styles.matchResult}
            />
          </div>
        )}
      </div>
    );
  }
}

Settings.propTypes = {
  trophyHunter: PropTypes.object
};

const SettingsContainer = withTracker(() => {
  const trophyHunter = TrophyHunters.findOne({
    userId: Meteor.userId()
  });

  return {
    trophyHunter
  };
})(Settings);

export default SettingsContainer;
