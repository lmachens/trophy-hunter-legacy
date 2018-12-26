import React, { Component } from 'react';

import Attributes from './Attributes';
import HelpBox from '../help/HelpBox';
import PlaystyleIcon from './PlaystyleIcon';
import PropTypes from 'prop-types';
import playstyles from '../../../api/playstyles/playstyles';

const GRAPHS = {
  PLAYSTYLE: 'playstyle'
};
class Playstyle extends Component {
  state = {
    graph: GRAPHS.PLAYSTYLE
  };

  render() {
    const { trophyHunter } = this.props;

    if (!trophyHunter) {
      return <div>Please play a match to get recognition by the app.</div>;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <HelpBox>
          This section shows several graphics about your playstyle. The basis of the computation
          were all match-making (no customs) Summoners Rift games. We will add further interesting
          graphics here soon and also a possibility to compare your stats to other Trophy Hunters.
        </HelpBox>
        <h2>Playstyle</h2>
        {this.renderPlaystyle()}
        <Attributes attributes={trophyHunter.attributes} />
      </div>
    );
  }

  renderPlaystyle() {
    const { trophyHunter } = this.props;

    return (
      <div style={{ display: 'inline-flex', margin: '10px 10px' }}>
        {Object.entries(playstyles).map(([key, playstyle]) => {
          let style;
          if (
            key === trophyHunter.playstyle ||
            ((!trophyHunter.playstyle || trophyHunter.playstyle === 'unknown') && key === 'unknown')
          ) {
            style = {
              height: 100,
              width: 100
            };
          } else {
            style = {
              height: 30,
              width: 30
            };
          }
          return (
            <div key={playstyle.name} style={{ margin: 'auto 10px' }}>
              <PlaystyleIcon playstyle={playstyle} style={style} />
            </div>
          );
        })}
      </div>
    );
  }
}

Playstyle.propTypes = {
  trophyHunter: PropTypes.object
};

export default Playstyle;
