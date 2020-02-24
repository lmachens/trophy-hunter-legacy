import PropTypes from 'prop-types';

const Rank = ({ rank }) => (rank ? `${rank}. Rank` : 'Unranked');

Rank.propTypes = {
  rank: PropTypes.number
};

export default Rank;
