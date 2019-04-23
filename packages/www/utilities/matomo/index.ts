import MatomoTracker from 'matomo-tracker';

const matomo = new MatomoTracker(process.env.MATOMO_ID, process.env.MATOMO_URL);

export default matomo;
