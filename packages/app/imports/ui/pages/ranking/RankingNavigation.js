import {
  Checkbox,
  MenuItem,
  SelectField,
  TextField,
  Toolbar,
  ToolbarGroup
} from '../../components/generic';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { SEASONS } from '../../../api/ranking/seasons';
import queryString from 'query-string';
import throttle from 'lodash.throttle';
import { withRouter } from 'react-router-dom';

class RankingNavigation extends Component {
  constructor(props) {
    super(props);

    const { season, region, youTube, twitch, summonerName } = queryString.parse(
      props.history.location.search
    );
    this.state = {
      region: region || null,
      youTube: !!youTube,
      twitch: !!twitch,
      summonerName: summonerName || '',
      season: season || SEASONS.S9
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { region, youTube, twitch, summonerName, season } = queryString.parse(
      nextProps.history.location.search
    );
    this.setState({
      region: region || null,
      youTube: !!youTube,
      twitch: !!twitch,
      summonerName: summonerName || '',
      season: season || SEASONS.S9
    });
  }

  handleRegionChange = (event, index, value) => {
    this.setState(
      {
        region: value
      },
      () => {
        const { history } = this.props;

        const query = Object.assign(queryString.parse(history.location.search), {
          region: this.state.region || undefined,
          limit: undefined,
          skip: undefined
        });
        history.replace(`/ranking?${queryString.stringify(query)}`);
      }
    );
  };

  handleYouTubeCheck = (event, isInputChecked) => {
    this.setState(
      {
        youTube: isInputChecked
      },
      () => {
        const { history } = this.props;

        const query = Object.assign(queryString.parse(history.location.search), {
          youTube: this.state.youTube || undefined,
          limit: undefined,
          skip: undefined
        });
        history.replace(`/ranking?${queryString.stringify(query)}`);
      }
    );
  };

  handleTwitchCheck = (event, isInputChecked) => {
    this.setState(
      {
        twitch: isInputChecked
      },
      () => {
        const { history } = this.props;

        const query = Object.assign(queryString.parse(history.location.search), {
          twitch: this.state.twitch || undefined,
          limit: undefined,
          skip: undefined
        });
        history.replace(`/ranking?${queryString.stringify(query)}`);
      }
    );
  };

  handleSummerNameChange = (event, newValue) => {
    this.setState(
      {
        summonerName: newValue
      },
      () => {
        this.updateSummonerName(this.state.summonerName);
      }
    );
  };

  updateSummonerName = throttle(newValue => {
    const { history } = this.props;

    const query = Object.assign(queryString.parse(history.location.search), {
      summonerName: newValue || undefined,
      limit: undefined,
      skip: undefined
    });
    history.replace(`/ranking?${queryString.stringify(query)}`);
  }, 300);

  handleSeasonChange = (event, index, value) => {
    this.setState(
      {
        season: value
      },
      () => {
        const { history } = this.props;

        const query = Object.assign(queryString.parse(history.location.search), {
          season: this.state.season || undefined,
          limit: undefined,
          skip: undefined
        });
        history.replace(`/ranking?${queryString.stringify(query)}`);
      }
    );
  };

  render() {
    const { region, youTube, twitch, summonerName, season } = this.state;

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <SelectField
              hintText="Season"
              onChange={this.handleSeasonChange}
              style={{ width: 150, marginRight: 10, marginLeft: 4 }}
              value={season}
            >
              <MenuItem primaryText="S9" value={SEASONS.S9} />
              <MenuItem primaryText="S8" value={SEASONS.S8} />
              <MenuItem primaryText="Trophy Hunt" value={SEASONS.TOURNAMENT1} />
              <MenuItem primaryText="All-Time" value={SEASONS.ALLTIME} />
            </SelectField>
          </ToolbarGroup>
          <ToolbarGroup>
            <SelectField
              hintText="Region"
              onChange={this.handleRegionChange}
              style={{ width: 150, marginRight: 10 }}
              value={region}
            >
              <MenuItem primaryText="" value={null} />
              <MenuItem primaryText="BR" value={'BR'} />
              <MenuItem primaryText="EUNE" value={'EUNE'} />
              <MenuItem primaryText="EUW" value={'EUW'} />
              <MenuItem primaryText="JP" value={'JP'} />
              <MenuItem primaryText="KR" value={'KR'} />
              <MenuItem primaryText="NA" value={'NA'} />
              <MenuItem primaryText="LAN" value={'LAN'} />
              <MenuItem primaryText="LAS" value={'LAS'} />
              <MenuItem primaryText="OCE" value={'OCE'} />
              <MenuItem primaryText="RU" value={'RU'} />
              <MenuItem primaryText="TR" value={'TR'} />
            </SelectField>
            <Checkbox
              checked={twitch}
              label="Twitch"
              onCheck={this.handleTwitchCheck}
              style={{ maxWidth: '100px' }}
            />
            <Checkbox
              checked={youTube}
              label="YouTube"
              onCheck={this.handleYouTubeCheck}
              style={{ maxWidth: '100px' }}
            />
            <TextField
              hintText="Search"
              onChange={this.handleSummerNameChange}
              style={{ maxWidth: '200px' }}
              value={summonerName}
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

RankingNavigation.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(RankingNavigation);
