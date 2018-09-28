import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

//icons
import ArrowForward from '@material-ui/icons/ArrowForward'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: 'grey',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            style= {{borderTop:'solid black 2px'}}
            
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Step 1"
          /> <KeyboardArrowRight style={{marginTop:'15px'}}/>
          <Tab 
            style= {{borderTop:'solid black 2px'}}
            // disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Step 2"
          /> 
          <KeyboardArrowRight style={{marginTop:'15px'}}/>
         <Tab
            style= {{borderTop:'solid black 2px'}}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Step 3"
          />
          <KeyboardArrowRight style={{marginTop:'15px'}}/>
          <Tab
            style= {{borderTop:'solid black 2px'}}
            
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Step 4"
          />
          <KeyboardArrowRight style={{marginTop:'15px'}}/>
          <Tab
            style= {{borderTop:'solid black 2px'}}
            
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Step 5"
          />
        </Tabs>
        {/* <Typography className={classes.typography}>Text to go here</Typography> */}
      </div>
    );
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);
