import React, { Component } from "react";
import PropTypes from "prop-types";
import withRoot from "../withRoot";
import AppNavBar from "./AppNavBar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    padding: "0 auto",
    backgroundImage: "linear-gradient(-45deg, #4504DA, #FF0353)"
  }
});
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} className={classes.header}>
          <AppNavBar />
        </Grid>
        <Grid item xs={12} className={classes.main}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Grid>
      </Grid>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRoot(withStyles(styles)(App));
