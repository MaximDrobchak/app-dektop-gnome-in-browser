import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  Toolbar,
  CssBaseline,
  AppBar,
  Button,
  Paper
} from "@material-ui/core/";

import { grey, pink, red } from "@material-ui/core/colors/";

// import ButtonIcon from "@material-ui/core/ButtonIcon";

export function OverridesCss() {
  return (
    <MuiThemeProvider theme={theme}>
      <Toolbar />
      <AppBar />
      <Button />
      <Paper />
    </MuiThemeProvider>
  );
}

const theme = createMuiTheme({
  type: "dark",
  palette: {
    primary: { main: grey[800] },
    secondary: pink,
    error: red,
    tonalOffset: 0.2
  },
  overrides: {
    MuiButton: {
      root: {
        color: "white",
        margin: "0px 0px 0px 0px ",
        padding: "0px 0px 0px 0px ",
        height: 10,
        width: 10
      }
    },
    MuiAppBar: {
      root: {
        disableRipple: true,
        margin: "0px 0px 0px 0px ",
        padding: "0px 0px 0px 0px ",
        height: 20
      }
    },
    MuiBattonBase: {
      root: {
        disableRipple: true,
        margin: "0px 0px 0px 0px ",
        padding: "0px 0px 0px 0px ",
        height: 10,
        width: 10
      }
    },
    // MuiIconBatton: {
    //   root: {
    //     disableRipple: true,
    //     margin: "0px 0px 0px 0px ",
    //     padding: "0px 0px 0px 0px ",
    //     height: 10,
    //     width: 10
    //   }
    // },

    MuiToolbar: {
      // root: {
      //   disableRipple: true,
      //   margin: "0px 0px 0px 0px ",
      //   padding: "0px 0px 0px 0px ",
      //   height: 10,
      //   width: 10
      // },
      // regular: {
      //   disableRipple: true,
      //   margin: "0px 0px 0px 0px ",
      //   padding: "0px 0px 0px 0px ",
      //   height: 10,
      //   width: 10
      // },
      // gutters: {
      //   disableRipple: true,
      //   margin: "0px 0px 0px 0px ",
      //   padding: "0px 0px 0px 0px ",
      //   height: 10,
      //   width: 10
      // }
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
