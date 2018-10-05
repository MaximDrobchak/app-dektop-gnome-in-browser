import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import{ Menu, AccountCircle }from "@material-ui/icons/";

const styles = theme => ({
  root: {
	
		margin: "0 auto",
		padding: "0 auto",
		width: '100%',
		padding: theme.spacing.unit * 0
  },
  grow: {
    flexGrow: 1,
	},
	menuIcon: {
		heigth: 15,
		width: 20,
	},
  menuButton: {
    // marginLeft: "-2vw",
		//
		marginTop: "-8vh",
		padding: theme.spacing.unit / 2,
	
    textAlign: 'center',
    color: theme.palette.text.primory,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit * 0,
  },
});
class AppNavBar extends Component {
	render(){
		const { classes } = this.props;
				return (
	
				<AppBar position="static" className={classes.root}>
					<Toolbar>
					<Grid container spacing={0}>
					<Grid item xs={1}>
						<IconButton className={classes.menuButton} color="inherit" >
							<Menu className={classes.menuIcon} />
						</IconButton>
						</Grid>
						<Grid item xs={10} />
						<Grid item xs={1}>
						<IconButton className={classes.menuButton} color="inherit" >
							<AccountCircle className={classes.menuIcon} />
						</IconButton>
						</Grid>
						</Grid>
				</Toolbar>
				</AppBar>
			
	);
	}
};
AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);








// import { Toolbar, ToolbarRow, ToolbarSection } from "@rmwc/toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import { withStyles } from "@material-ui/core/styles";
// import PowerSettingsNew from "@material-ui/icons/PowerSettingsNewOutlined";
// import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
// import PropTypes from "prop-types";


// const styles = theme => ({
//   root: {
//     position: "relative",
//     background: "rgba(0, 0, 0, .44)",
//     height: 20
//   },
//   sections: {
//     display: "inline-block",
//     margin: "0 auto"
//   },
//   iconButton: {
//     height: 10,
//     width: 10,
//     margin: "0 auto"
//   },
//   iconImg: {
//     height: 20,
//     width: 20,
//     color: "#fafafa",
//     position: "relative",
//     bottom: 10
//   }
// });



// 	class App extends Component {
// 		render() {
// 			const { classes } = this.props;
// 			return (
// 	<Toolbar variant="contained" className={classes.root}>
// 	<ToolbarRow style={{ display: "inline-flex" }}>
// 		<ToolbarSection className={classes.sections}>
// 			<IconButton className={classes.iconButton} variant="contained">
// 				<ArrowDropDown
// 					style={{ width: 30, height: 30, bottom: 15 }}
// 					className={classes.iconImg}
// 					icon="menu"
// 				/>
// 			</IconButton>
// 		</ToolbarSection>
// 		<ToolbarSection>
// 			<IconButton className={classes.iconButton} variant="contained">
// 				<PowerSettingsNew className={classes.iconImg} icon="save" />
// 			</IconButton>
// 			<IconButton className={classes.iconButton} variant="contained">
// 				<PowerSettingsNew className={classes.iconImg} icon="print" />
// 			</IconButton>
// 		</ToolbarSection>
// 	</ToolbarRow>
// 	</Toolbar> 
//     );
//   }
// }
// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };
// export default withRoot(App);

