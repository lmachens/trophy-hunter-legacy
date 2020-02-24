import PropTypes from 'prop-types';

const SummonerLevel = ({ level }) => `${level}. Level`;

SummonerLevel.propTypes = {
  level: PropTypes.number
};

export default SummonerLevel;
