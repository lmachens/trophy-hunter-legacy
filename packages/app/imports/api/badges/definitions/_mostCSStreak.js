import { Badge } from './_component';
import React from 'react';

const Component = props => (
  <Badge {...props}>
    <defs>
      <radialGradient id="gradient-mostCSStreak">
        <stop offset="0%" stopColor="#94f629" stopOpacity="1" />
        <stop offset="100%" stopColor="#417505" stopOpacity="1" />
      </radialGradient>
    </defs>
    <path
      d="M379.42 24.066l-28.059 87.407 28.268 5.941-3.098 15.352-52.25 47.843-51.5-43.125-23.404-4.093c8.217-14.33 14.683-32.77 16.404-49.594 10.02-2.28 34.92-5.675 46.094-10.059-4.997-10.285-30.197-16.906-48.7-16.316-1.733-20.713-8.88-29.054-34.155-27.902-25.276 1.151-32.972 6.601-30.16 36.423-18.866 4.127-38.097 12.616-39.74 27.084 7.87-.307 32.96-2.896 40.724-3.011.66 14.1 4.4 27.847 9.97 36.375l-35.158-6.125L106 195.922l77.344 55.875 1.625 16.844-34.19 215.75h38.375l38.315-169.25 47.873 169.25h37.47l-3.564-16.407 17.094 16.407 63.062-322.532c5.01-4.54 9.265-8.481 12.094-11.312.177-10.537-2.537-18.942-5.094-24.5l.971-4.902 27.238 5.724 8.444-93.117-22.846 68.781-10.848-2.256 6.635-72.658-21.568 69.55-11.217-2.333 6.207-70.77zm26.578 3.553l.002-.01h-.002v.01zM182.844 153.39l.344 64.095-31.5-23.75 31.156-40.345zm88.031 21.252l50.875 45.937s22.993-19.456 44.875-38.531l-57.438 285.562-42.812-197.529 4.5-95.44z"
      fill="url(#gradient-mostCSStreak)"
    />
  </Badge>
);
const ratio = 0.3;
export const mostCSStreak = {
  name: 'mostCSStreak',
  title: 'Good farmer!',
  description: value => `This summoner has most cs in ${value}% of games on this champion.`,
  svg:
    '<defs><radialGradient id="gradient-mostCSStreak"><stop offset="0%" stop-color="#94f629" stop-opacity="1"></stop><stop offset="100%" stop-color="#417505" stop-opacity="1"></stop></radialGradient></defs><path fill="url(#gradient-mostCSStreak)" d="M379.42 24.066l-28.059 87.407 28.268 5.941-3.098 15.352-52.25 47.843-51.5-43.125-23.404-4.093c8.217-14.33 14.683-32.77 16.404-49.594 10.02-2.28 34.92-5.675 46.094-10.059-4.997-10.285-30.197-16.906-48.7-16.316-1.733-20.713-8.88-29.054-34.155-27.902-25.276 1.151-32.972 6.601-30.16 36.423-18.866 4.127-38.097 12.616-39.74 27.084 7.87-.307 32.96-2.896 40.724-3.011.66 14.1 4.4 27.847 9.97 36.375l-35.158-6.125L106 195.922l77.344 55.875 1.625 16.844-34.19 215.75h38.375l38.315-169.25 47.873 169.25h37.47l-3.564-16.407 17.094 16.407 63.062-322.532c5.01-4.54 9.265-8.481 12.094-11.312.177-10.537-2.537-18.942-5.094-24.5l.971-4.902 27.238 5.724 8.444-93.117-22.846 68.781-10.848-2.256 6.635-72.658-21.568 69.55-11.217-2.333 6.207-70.77zm26.578 3.553l.002-.01h-.002v.01zM182.844 153.39l.344 64.095-31.5-23.75 31.156-40.345zm88.031 21.252l50.875 45.937s22.993-19.456 44.875-38.531l-57.438 285.562-42.812-197.529 4.5-95.44z"></path>',
  component: Component,
  obtainedCheck: value => value > ratio
};
