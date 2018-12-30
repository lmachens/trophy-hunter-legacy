import React, { PureComponent } from 'react';

import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

class TShirtArtworkItem extends PureComponent {
  handleDownload = event => {
    event.preventDefault();
    const { tShirtArtwork } = this.props;
    const disabled = !tShirtArtwork;
    if (!disabled) {
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'openUrlInDefaultBrowser',
          message: Meteor.absoluteUrl('files/trophy_hunter_print.zip')
        },
        '*'
      );
    }
  };

  render() {
    const { tShirtArtwork } = this.props;
    const disabled = !tShirtArtwork;
    return (
      <div>
        We created an awesome artwork for you!
        <br />
        You can print it at your favorite print shop (search for <i>tshirt print online</i>).
        <div>
          <a href="#" onClick={this.handleDownload} target="_blank">
            <img
              src="images/tshirt_download.png"
              style={{
                height: 330,
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
        or <a href="mailto:info@loltrophyhunter.com">a mail</a> with pictures of you wearing the
        t-shirt.
      </div>
    );
  }
}

TShirtArtworkItem.propTypes = {
  tShirtArtwork: PropTypes.object
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return { tShirtArtwork: get(trophyHunter, 'items.tShirtArtwork') };
};

export default connect(mapStateToProps)(TShirtArtworkItem);
