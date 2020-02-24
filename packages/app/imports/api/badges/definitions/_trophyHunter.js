import React, { Fragment } from 'react';

import { Badge } from './_component';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

const Component = props => (
  <Badge {...props}>
    <image
      height="512px"
      width="512px"
      x="0"
      xlinkHref={Meteor.absoluteUrl('images/icon.png')}
      y="0"
    />
  </Badge>
);

const Description = trophyHunter => (
  <Fragment>
    This summoner is a Trophy Hunter!
    <br />
    {trophyHunter.s9Rank ? `${trophyHunter.s9Rank}. Rank` : 'Unranked'}{' '}
    {trophyHunter.rank && `(${trophyHunter.rank}. All-Time)`}
    <br />
    {trophyHunter.lastLogin && `Last Login ${moment(trophyHunter.lastLogin).calendar()}`}
  </Fragment>
);

export const trophyHunter = {
  name: 'trophyHunter',
  title: 'Trophy Hunter!',
  description: Description,
  svg: `<image xlink:href="${Meteor.absoluteUrl(
    'images/icon.png'
  )}" x="0" y="0" width="512px" height="512px" />`,
  component: Component
};
