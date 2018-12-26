import React, { Fragment, PureComponent } from 'react';

import Line from 'recharts/lib/cartesian/Line';
import LineChart from 'recharts/lib/chart/LineChart';
import PropTypes from 'prop-types';
import { Typography } from '../../../generic';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';

class GoldOverTime extends PureComponent {
  render() {
    const { firstStats = {}, secondStats = {} } = this.props;
    return (
      <Fragment>
        <Typography variant="caption">Gold Over Time (Work in progress)</Typography>
        <LineChart
          data={[
            {
              name: '0-10',
              playerOne: firstStats.zeroToTen,
              playerTwo: secondStats.zeroToTen
            },
            {
              name: '10-20',
              playerOne: firstStats.tenToTwenty,
              playerTwo: secondStats.tenToTwenty
            },
            {
              name: '20-30',
              playerOne: firstStats.twentyToThirty,
              playerTwo: secondStats.twentyToThirty
            },
            {
              name: '30+',
              playerOne: firstStats.thirtyToEnd,
              playerTwo: secondStats.thirtyToEnd
            }
          ]}
          height={200}
          width={300}
        >
          <XAxis dataKey="name" tick={{ fill: '#c4b998' }} />
          <YAxis tick={{ fill: '#c4b998' }} />
          <Line dataKey="playerOne" stroke="#319fd9" type="monotone" />
          <Line dataKey="playerTwo" stroke="#bb3231" type="monotone" />
        </LineChart>
      </Fragment>
    );
  }
}

GoldOverTime.propTypes = {
  firstStats: PropTypes.object,
  secondStats: PropTypes.object
};

export { GoldOverTime };
