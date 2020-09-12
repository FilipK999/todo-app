import React from "react";
import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";

export default function Task({ task, key }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} key={key}>
      <Paper className={classes.task}>{task.title}</Paper>
    </Grid>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    task: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center"
    }
  })
);
