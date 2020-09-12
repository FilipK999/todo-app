import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function Tasks() {
  const classes = useStyles();
  const task = useSelector(state => state.task);

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {task.tasks.map((task, key) => (
            <Grid item xs={12} key={key}>
              <Paper className={classes.task}>{task.title}</Paper>
            </Grid>
          ))}
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
      alignContent: "center"
    }
  })
);
