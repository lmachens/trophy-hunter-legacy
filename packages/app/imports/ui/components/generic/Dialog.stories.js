import { Dialog } from './_Dialog';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('Dialog', () => (
  <Dialog onRequestClose={() => {}} open={true} title="Title">
    Content
  </Dialog>
));
