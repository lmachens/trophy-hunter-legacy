import { IconButton, InputBase, MenuItem, Paper, Select, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { useState } from 'react';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    maxWidth: '90vw',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

const regions = ['BR', 'EUNE', 'EUW', 'JP', 'KR', 'LAN', 'LAS', 'NA', 'OCE', 'TR', 'RU'];

const SummonerSearch = ({ className }) => {
  const classes = useStyles();
  const [region, setRegion] = useState('EUW');
  const [summonerName, setSummonerName] = useState('');

  const handleRegionChange = event => {
    setRegion(event.target.value);
  };

  const handleSummonerNameChange = event => {
    setSummonerName(event.target.value);
  };

  return (
    <Tooltip title="Summoner Search Comming Soon!" placement="top">
      <Paper className={classNames(classes.root, className)} elevation={1}>
        <Select
          value={region}
          onChange={handleRegionChange}
          input={<InputBase name="age" id="age-customized-select" />}
        >
          {regions.map(region => (
            <MenuItem value={region} key={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
        <InputBase
          autoFocus
          className={classes.input}
          placeholder="Summoner Name"
          value={summonerName}
          onChange={handleSummonerNameChange}
        />
        <IconButton className={classes.iconButton} aria-label="Search" disabled>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Tooltip>
  );
};

export default SummonerSearch;
