import React, { PureComponent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import TrophyHunterName from '../TrophyHunterName';
import AsyncSelect from 'react-select/lib/Async';
import { withStyles } from '../generic';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: 256,
    margin: '0 auto'
  },
  input: {
    display: 'flex',
    padding: 0
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  singleValue: {
    fontSize: 16
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center'
  }
});

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      InputProps={{
        inputComponent,
        inputProps: {
          children: props.children,
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          ...props.innerProps
        }
      }}
      fullWidth
      {...props.selectProps.textFieldProps}
    />
  );
}

function Menu(props) {
  return (
    <Paper className={props.selectProps.classes.paper} square {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

function NoOptionsMessage(props) {
  return (
    <Typography
      className={props.selectProps.classes.noOptionsMessage}
      color="textSecondary"
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      component="div"
      selected={props.isFocused}
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      className={props.selectProps.classes.placeholder}
      color="textSecondary"
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
  selectProps: PropTypes.object,
  children: PropTypes.node
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class TrophyHunterAutoComplete extends PureComponent {
  loadOptions = (inputValue, callback) => {
    const { userId } = this.props;
    Meteor.call('getTrophyHunterByName', inputValue, (err, result) => {
      if (result) {
        callback(
          result
            .filter(th => th.userId !== userId)
            .map(th => ({
              value: th.userId,
              label: th.fullName
            }))
        );
      }
    });
  };

  handleChange = inputValue => {
    const { onChange } = this.props;
    onChange(null, inputValue.value);
  };

  render() {
    const { classes, value } = this.props;

    if (!value)
      return (
        <AsyncSelect
          cacheOptions
          className={classes.root}
          classes={classes}
          components={components}
          loadOptions={this.loadOptions}
          onChange={this.handleChange}
          placeholder="Type in summoner name"
        />
      );

    return <TrophyHunterName userId={value} />;
  }
}

TrophyHunterAutoComplete.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  userId: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(TrophyHunterAutoComplete);
