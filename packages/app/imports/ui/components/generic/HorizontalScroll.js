import HardwareKeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import HardwareKeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  container: {
    position: 'relative',
    margin: '0 -6px'
  },
  children: {
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  offset: {
    position: 'relative',
    transition: 'all 300ms ease'
  },
  leftArrow: {
    position: 'absolute',
    top: 12,
    left: 0,
    padding: 0,
    height: 24,
    width: 24
  },
  rightArrow: {
    position: 'absolute',
    top: 12,
    right: 0,
    padding: 0,
    height: 24,
    width: 24
  }
};

class HorizontalScroll extends React.Component {
  state = {
    overflow: 0,
    left: 0,
    width: 0
  };

  componentDidMount() {
    this.checkOverflowingChildren();
  }

  componentDidUpdate() {
    this.checkOverflowingChildren();
  }

  checkOverflowingChildren() {
    const children = this.children;
    // Things involving accessing DOM properties on element
    // In the case of what this question actually asks:
    const overflow = children.scrollWidth - children.offsetWidth + this.state.left;

    if (overflow !== this.state.overflow) {
      this.setState({ overflow, width: children.offsetWidth });
    }
  }

  handleLeftClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState(prevState => {
      return {
        left:
          prevState.left +
          (prevState.left * -1 > prevState.width ? prevState.width - 20 : prevState.left * -1)
      };
    });
  };

  handleRightClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState(prevState => {
      return {
        left:
          prevState.left -
          (prevState.overflow > prevState.width ? prevState.width - 20 : prevState.overflow)
      };
    });
  };

  render() {
    const { children, style, leftStyle, rightStyle } = this.props;
    const { overflow, left } = this.state;
    const showArrows = overflow !== 0 || left !== 0;
    const tempStyle = Object.assign({}, styles.container, style);
    const tempLeftStyle = Object.assign({}, styles.leftArrow, leftStyle);
    const tempRightStyle = Object.assign({}, styles.rightArrow, rightStyle);

    return (
      <div style={tempStyle}>
        {showArrows && (
          <IconButton disabled={left >= 0} onClick={this.handleLeftClick} style={tempLeftStyle}>
            <HardwareKeyboardArrowLeftIcon />
          </IconButton>
        )}
        <div
          style={
            showArrows ? Object.assign({ margin: '0 20px' }, styles.children) : styles.children
          }
        >
          <div
            ref={input => (this.children = input)}
            style={Object.assign({ left }, styles.offset)}
          >
            {children}
          </div>
        </div>
        {showArrows && (
          <IconButton
            disabled={overflow <= 0}
            onClick={this.handleRightClick}
            style={tempRightStyle}
          >
            <HardwareKeyboardArrowRightIcon />
          </IconButton>
        )}
      </div>
    );
  }
}

HorizontalScroll.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  leftStyle: PropTypes.object,
  rightStyle: PropTypes.object
};

export default HorizontalScroll;
