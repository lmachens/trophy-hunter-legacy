import { Checkbox, DropDownMenu, MenuItem, TextField, Toolbar, ToolbarGroup } from '../generic';
import React, { Component } from 'react';

import HelpBox from '../help/HelpBox';
import PropTypes from 'prop-types';
import Trophy from '../Trophy';
import escapeStringRegexp from 'escape-string-regexp';
import getActiveQuestTrophies from '../../../api/trophies/getActiveQuestTrophies';
import { trophies } from '../../../api/trophies';

class AllTrophies extends Component {
  state = {
    sortBy: 'difficulty',
    onlyQuests: false,
    name: ''
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <HelpBox>
          This section shows all achievable trophies. Some of them are only obtainable in
          Summoner&#x27;s Rift. Hover a trophy to see more details.
        </HelpBox>
        {this.renderNavigation()}
        {this.renderTrophies()}
      </div>
    );
  }

  handleSortChange = (event, index, value) => {
    this.setState({
      sortBy: value
    });
  };

  handleQuestsChecked = (event, isInputChecked) => {
    this.setState({
      onlyQuests: isInputChecked
    });
  };

  handleNameChanged = (event, value) => {
    this.setState({
      name: value
    });
  };

  renderNavigation() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu onChange={this.handleSortChange} value={this.state.sortBy}>
            <MenuItem primaryText="Difficulty" value={'difficulty'} />
            <MenuItem primaryText="Name" value={'name'} />
            <MenuItem primaryText="Obtained" value={'obtained'} />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <Checkbox
            checked={this.state.onlyQuests}
            label="Only Quests"
            onCheck={this.handleQuestsChecked}
            style={{ maxWidth: '150px' }}
          />
          <TextField
            hintText="Search"
            onChange={this.handleNameChanged}
            style={{ maxWidth: '200px' }}
            value={this.state.name}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }

  renderTrophies() {
    const { trophyHunter } = this.props;
    const { onlyQuests, name, obtained, sortBy } = this.state;

    let filteredTrophies;
    if (onlyQuests) {
      filteredTrophies = getActiveQuestTrophies(trophyHunter);
    } else if (name) {
      const regExp = new RegExp(escapeStringRegexp(name), 'gi');
      filteredTrophies = Object.values(trophies).filter(trophy => {
        return regExp.test(trophy.name) || regExp.test(trophy.description);
      });
    } else if (obtained) {
      filteredTrophies = Object.values(trophies).filter(trophy => {
        return trophyHunter.trophiesObtained.find(obtained => obtained.name === trophy.name);
      });
    } else {
      filteredTrophies = Object.values(trophies);
    }

    let sortedTrophies;
    if (sortBy === 'difficulty') {
      sortedTrophies = filteredTrophies.sort((a, b) => a.score - b.score);
    } else if (sortBy === 'obtained' && trophyHunter) {
      sortedTrophies = filteredTrophies.sort((a, b) => {
        const aObtained = trophyHunter.trophiesObtained.find(obtained => obtained.name === a.name);
        const bObtained = trophyHunter.trophiesObtained.find(obtained => obtained.name === b.name);
        return (aObtained ? aObtained.count : 0) - (bObtained ? bObtained.count : 0);
      });
    } else {
      sortedTrophies = filteredTrophies.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // ignore upper and lowercase
        const titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    }
    let countObtained = 0;
    return (
      <div>
        {sortedTrophies.map(trophy => {
          const trophyObtained =
            trophyHunter &&
            trophyHunter.trophiesObtained.find(obtained => obtained.name === trophy.name);
          if (trophyObtained) {
            countObtained++;
          }
          return (
            <Trophy
              key={trophy.name}
              obtainedCount={trophyObtained ? trophyObtained.count : 0}
              trophy={trophy}
            />
          );
        })}
        <p>
          {countObtained} of {filteredTrophies.length} trophies obtained
        </p>
      </div>
    );
  }
}

AllTrophies.propTypes = {
  trophyHunter: PropTypes.object
};

export default AllTrophies;
