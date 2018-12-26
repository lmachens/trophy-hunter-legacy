import { Dialog } from './_Dialog';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Dialog', module).add('basic', () => (
  <Dialog onRequestClose={() => {}} open={true} title="Title">
    Content
  </Dialog>
));
