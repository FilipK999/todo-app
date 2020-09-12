import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography, Grid, TextField } from "@material-ui/core";
import Tasks from "../Tasks";

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Add A Task:</Typography>
          </Grid>
          <Grid item xs={12}>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
              }}>
              <TextField id="outlined-multiline-static" label="Task" variant="outlined" className={classes.textField} />
              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
      <Tasks></Tasks>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
    },
    textField: {
      marginBottom: 20,
    },
  })
);
