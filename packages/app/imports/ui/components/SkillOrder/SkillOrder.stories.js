import SkillOrder from './SkillOrder';
import React from 'react';
import { storiesOf } from '@storybook/react';
import champions from '/imports/shared/riot-api/champions.ts';

const champion = champions[1];
storiesOf('Components', module).add('SkillOrder', () => <SkillOrder champion={champion} />);
