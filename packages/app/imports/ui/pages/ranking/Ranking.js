import RankingNavigation from './RankingNavigation';
import RankingPage from './RankingPage';
import React from 'react';
import universeTheme from '/imports/ui/layouts/universeTheme';

const styles = {
  container: {
    height: '100%',
    position: 'relative'
  },
  background: {
    position: 'absolute',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  foreground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
};

const Ranking = () => {
  const backgroundStyle = Object.assign(
    {
      backgroundImage:
        'url(//universe-meeps.leagueoflegends.com/v1/assets/images/factions/image-gallery/freljord-gatewayhowling.jpg)',
      filter: universeTheme.boxBackground.filter,
      opacity: universeTheme.boxBackground.opacity
    },
    styles.background
  );

  return (
    <div style={styles.container}>
      <div style={backgroundStyle} />
      <div style={styles.foreground}>
        <RankingNavigation />
        <RankingPage />
      </div>
    </div>
  );
};

export default Ranking;
