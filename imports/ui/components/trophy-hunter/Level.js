import PropTypes from 'prop-types';

const Level = ({ level }) => `${level}. Level`;

Level.propTypes = {
  level: PropTypes.number
};

export default Level;
