import React, { Component } from 'react';

import { Dialog } from '../generic';
import FloatingChampionButton from './FloatingChampionButton';
import PreMatch from './PreMatch';
import isEqual from 'lodash.isequal';

class PreMatchOverlay extends Component {
  state = {
    open: false
  };

  UNSAFE_componentWillMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = event => {
    const data = event.data;
    if (data.overwolf) {
      const { type, message } = data;

      switch (type) {
        case 'champSelect':
          {
            const newState = {
              open: this.state.open,
              data: message
            };
            if (
              (!message.isSpectating &&
                message.chatDetails.chatRoomName !== this.lastChatRoomName) ||
              !this.state.data
            ) {
              this.lastChatRoomName = message.chatDetails.chatRoomName;
              newState.open = true;
            }
            delete message.chatDetails;
            delete message.actions;

            if (!isEqual(this.state, newState)) {
              this.setState(newState);
            }
          }
          break;
        case 'matchOutcome':
          this.setState({
            open: false,
            data: null
          });
          break;
      }
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFloatingOpenClick = () => {
    this.setState({ open: true });
  };

  handleFloatingCloseClick = () => {
    this.setState({
      open: false,
      data: null
    });
  };

  render() {
    const { data, open } = this.state;

    return (
      <div>
        <Dialog fullscreen={true} onClose={this.handleClose} open={open}>
          <div>{open && data && <PreMatch {...data} />}</div>
        </Dialog>
        {!open && data && (
          <FloatingChampionButton
            {...data}
            onCloseClick={this.handleFloatingCloseClick}
            onOpenClick={this.handleFloatingOpenClick}
          />
        )}
      </div>
    );
  }
}

export default PreMatchOverlay;
