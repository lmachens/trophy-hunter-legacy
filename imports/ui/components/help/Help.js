import { Button } from '@material-ui/core';
import HelpBox from '../help/HelpBox';
import PropTypes from 'prop-types';
import React from 'react';
import { TABS } from '../encyclopedia/Encyclopedia';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openEncyclopediaEntry } from '../../../store/actions';

const styles = {
  container: {
    textAlign: 'center'
  },
  faq: {
    margin: '0 auto'
  }
};

const handleFAQClick = () => {
  window.open('http://support.overwolf.com/article-categories/trophy_hunter/');
};

const handleTweetClick = () => {
  window.open('https://twitter.com/LolTrophyHunter/');
};

const Help = ({ openEncyclopediaEntry, onClose }) => {
  const handleEncyclopediaClick = () => {
    if (onClose) {
      onClose();
    }
    openEncyclopediaEntry({ tab: TABS.TREES });
  };

  return (
    <div style={styles.container}>
      <HelpBox>
        Welcome Trophy Hunter!
        <br />
        Just play a match to learn about this app. You need help? Watch the video to get an overview
        about the features. If you have a question, take a look at our FAQ, join{' '}
        <a href="https://discord.gg/6aYTkbA" rel="noopener noreferrer" target="_blank">
          Discord
        </a>{' '}
        or send a tweet.
      </HelpBox>
      <iframe
        allow="encrypted-media"
        allowFullScreen
        frameBorder="0"
        gesture="media"
        height="260"
        src="https://www.youtube.com/embed/z_ZRygy52Ys"
        width="550"
      />
      <br />
      <Button onClick={handleEncyclopediaClick} style={styles.faq}>
        Encyclopedia
      </Button>
      <Button onClick={handleFAQClick} style={styles.faq}>
        Open FAQ
      </Button>
      <a href="https://discord.gg/6aYTkbA" rel="noopener noreferrer" target="_blank">
        <Button style={styles.faq}>Join Discord</Button>
      </a>
      <Button onClick={handleTweetClick} style={styles.faq}>
        Send tweet
      </Button>
    </div>
  );
};
Help.propTypes = {
  onClose: PropTypes.func,
  openEncyclopediaEntry: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    openEncyclopediaEntry: bindActionCreators(openEncyclopediaEntry, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Help);
