import React, { PureComponent } from 'react';

import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

class StreamOverlayItem extends PureComponent {
  handleDownload = event => {
    event.preventDefault();
    const { streamOverlay } = this.props;
    const disabled = !streamOverlay;
    if (!disabled) {
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'openUrlInDefaultBrowser',
          message: Meteor.absoluteUrl('files/trophy_hunter_stream_overlay.zip')
        },
        '*'
      );
    }
  };

  render() {
    const { streamOverlay } = this.props;
    const disabled = !streamOverlay;
    return (
      <div>
        This awesome overlay will make your Stream more professional!
        <br />
        You can add it as an additional layer in your streaming software.
        <br />
        We added all important files including the <b>.psd source files</b>. You are free to
        customize it to your needs!
        <div>
          <a href="#" onClick={this.handleDownload} target="_blank">
            <img
              src="images/download_stream_overlay.png"
              style={{
                height: 290,
                margin: 10,
                filter: disabled ? 'grayscale(100%)' : null
              }}
            />
          </a>
          <br />
          <b>
            If downloading opens the Overwolf Browser, please copy and paste the link to your
            default Browser.
          </b>
        </div>
        Please send us a{' '}
        <a href="https://twitter.com/LolTrophyHunter" rel="noopener noreferrer" target="_blank">
          tweet
        </a>{' '}
        or <a href="mailto:info@loltrophyhunter.com">a mail</a> when you are using our overlay.
        <br />
        Check out{' '}
        <a href="https://twitter.com/andreevgfx" rel="noopener noreferrer" target="_blank">
          @andreevgfx
        </a>{' '}
        for more free stream overlays!
      </div>
    );
  }
}

StreamOverlayItem.propTypes = {
  streamOverlay: PropTypes.object
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return { streamOverlay: get(trophyHunter, 'items.streamOverlay') };
};

export default connect(mapStateToProps)(StreamOverlayItem);
