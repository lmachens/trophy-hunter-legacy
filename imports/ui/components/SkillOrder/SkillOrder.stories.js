import SkillOrder from './SkillOrder';
import React from 'react';
import { storiesOf } from '@storybook/react';
import champions from '../../../api/riot-api/static/champions';

const champion = champions[1];
storiesOf('Components', module).add('SkillOrder', () => <SkillOrder champion={champion} />);
