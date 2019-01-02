import { IconButton, TextField } from '../generic';
import React, { PureComponent } from 'react';

import { ActionGradeIcon } from '../icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

const styles = {
  selected: {
    color: '#be9820'
  }
};

const messages = [
  '',
  'Why do you hate me?',
  'Really bro?',
  "It's something ¯\\_(ツ)_/¯",
  'Not bad!',
  'Awesome!'
];

class FeedbackItem extends PureComponent {
  state = {
    tmpRating: this.props.feedback ? this.props.feedback.rating : 0,
    rating: this.props.feedback ? this.props.feedback.rating : 0,
    text: this.props.feedback ? this.props.feedback.text : ''
  };

  isValid = () => {
    const { playedGame } = this.props;
    return this.state.rating > 0 && this.state.text.length > 0 && playedGame;
  };

  handleRatingChange = rating => () => {
    this.setState({ rating }, this.setParentState);
  };

  handleTextChange = (event, text) => {
    this.setState(
      {
        text
      },
      this.setParentState
    );
  };

  setParentState = () => {
    const { rating, text } = this.state;
    const { onChange } = this.props;

    const valid = this.isValid();
    onChange({ rating, text }, valid);
  };

  render() {
    const { playedGame } = this.props;
    const rating = this.state.tmpRating || this.state.rating;
    const message = messages[rating];

    return (
      <div>
        Your feedback helps us to improve this app and make it more awesome!
        <br />
        For bugs and issues, please ask in <Link to={'/chat/general'}>#general</Link>. Otherwise we
        can not help and answer you.
        <br />
        You can update this form if you change your opinion.
        <br />
        In addition, you can help others to find this app by sharing{' '}
        <a
          href="https://play.overwolf.com/trophy-hunter/"
          rel="noopener noreferrer"
          target="_blank"
        >
          this link
        </a>{' '}
        and rating us in the Overwolf store.
        <br />
        Note that we develop this app in our free time and have to pay for the RP-Codes in our
        lottery.
        <br />
        <IconButton
          iconStyle={rating > 0 ? styles.selected : {}}
          onClick={this.handleRatingChange(1)}
          onMouseEnter={() => this.setState({ tmpRating: 1 })}
          onMouseLeave={() => this.setState({ tmpRating: 0 })}
        >
          <ActionGradeIcon />
        </IconButton>
        <IconButton
          iconStyle={rating > 1 ? styles.selected : {}}
          onClick={this.handleRatingChange(2)}
          onMouseEnter={() => this.setState({ tmpRating: 2 })}
          onMouseLeave={() => this.setState({ tmpRating: 0 })}
        >
          <ActionGradeIcon />
        </IconButton>
        <IconButton
          iconStyle={rating > 2 ? styles.selected : {}}
          onClick={this.handleRatingChange(3)}
          onMouseEnter={() => this.setState({ tmpRating: 3 })}
          onMouseLeave={() => this.setState({ tmpRating: 0 })}
        >
          <ActionGradeIcon />
        </IconButton>
        <IconButton
          iconStyle={rating > 3 ? styles.selected : {}}
          onClick={this.handleRatingChange(4)}
          onMouseEnter={() => this.setState({ tmpRating: 4 })}
          onMouseLeave={() => this.setState({ tmpRating: 0 })}
        >
          <ActionGradeIcon />
        </IconButton>
        <IconButton
          iconStyle={rating > 4 ? styles.selected : {}}
          onClick={this.handleRatingChange(5)}
          onMouseEnter={() => this.setState({ tmpRating: 5 })}
          onMouseLeave={() => this.setState({ tmpRating: 0 })}
        >
          <ActionGradeIcon />
        </IconButton>
        <br />
        <span style={{ lineHeight: '24px' }}>{message}</span>
        <br />
        <TextField
          hintStyle={{ color: '#757575' }}
          hintText="Give us a more detailed feedback."
          multiLine={true}
          onChange={this.handleTextChange}
          rows={1}
          value={this.state.text}
        />
        {!playedGame && (
          <p style={{ fontWeight: 'bold', color: 'red' }}>
            You have to play at least 1 match before you can submit feedback!
          </p>
        )}
      </div>
    );
  }
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object,
  playedGame: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return {
    playedGame: !!get(trophyHunter, 'features.games'),
    feedback: get(trophyHunter, 'items.feedback')
  };
};

export default connect(mapStateToProps)(FeedbackItem);
