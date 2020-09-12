import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import Task from "../../components/Task/Task";

export default function Tasks() {
  const task = useSelector(state => state.task);

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {task.tasks.map((task, key) => (
            <Task {...{ task, key }} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
