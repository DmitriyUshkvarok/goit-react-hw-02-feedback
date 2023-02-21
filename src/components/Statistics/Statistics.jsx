import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <ul className="statisticList">
      <li className="statisticItem">
        <p className="statisticText">Good: {good}</p>
      </li>
      <li className="statisticItem">
        <p className="statisticText">Neutral: {neutral}</p>
      </li>
      <li className="statisticItem">
        <p className="statisticText">Bad: {bad}</p>
      </li>
      <li className="statisticItem">
        <p className="statisticText">Total: {total}</p>
      </li>
      <li className="statisticItem">
        <p className="statisticText">PositiveFeedback: {positiveFeedback}</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};

export default Statistics;
