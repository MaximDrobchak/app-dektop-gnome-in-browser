import React, { Component } from "react";
import { Toolbar, ToolbarRow } from "@rmwc/toolbar";
import IconButton from "@material-ui/core/IconButton";

import PowerSettingsNew from "@material-ui/icons/PowerSettingsNewOutlined";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    background: "rgba(0, 0, 0, .44)",
    maxHeigth: 20,
    margin: 0,
    padding: 0
  },
  buttons: {
    position: "relative",
    bottom: 5
  },
  iconsa: {
    color: "#fafafa",
    fontSize: 24,
    margin: 0,
    padding: 0,
    width: 20,
    heigth: 20
  },
  App: {
    margin: 0,
    padding: 0
  }
});
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Toolbar style={{ height: "30px" }} className={classes.root}>
          <ToolbarRow>
            <IconButton className={classes.buttons} size="mini">
              <PowerSettingsNew className={classes.iconsa} />
            </IconButton>
            <IconButton className={classes.buttons} size="mini">
              <ArrowDropDown className={classes.iconsa} />
            </IconButton>
          </ToolbarRow>
        </Toolbar>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
