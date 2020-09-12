import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

export default function Tasks() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} style={{ padding: 5 }}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.task}>Task</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.task}>Task</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.task}>Task</Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    task: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
    },
  })
);
