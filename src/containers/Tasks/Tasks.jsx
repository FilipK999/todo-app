import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

export default function Tasks() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
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
