import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { FormControlLabel, Switch } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../actions";

const drawerWidth = 240;

export default function PermanentDrawerRight() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const app = useSelector(state => state.app);
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left">
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem>
            <FormControlLabel
              control={<Switch name="switch" color="primary" />}
              label="Dark mode"
              checked={!app.theme}
              onClick={() => dispatch(appActions.switchTheme())}
              labelPlacement="start"
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));
