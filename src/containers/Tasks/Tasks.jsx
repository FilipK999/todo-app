import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Task from "../../components/Task/Task";

export default function Tasks() {
  const task = useSelector(state => state.task);

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {task.tasks.map((task, key) => {
            return !task.completed && <Task key={key} {...{ task }} />;
          })}
        </Grid>
        {task.showCompleted && (
          <React.Fragment>
            <Paper>
              <Grid container justify="center" style={{ margin: "40px 0px 20px 0px", padding: 10 }}>
                <Typography variant="h6">Completed:</Typography>
              </Grid>
            </Paper>
            <Grid container justify="center" spacing={2}>
              {task.tasks.map((task, key) => {
                return task.completed && <Task key={key} {...{ task }} />;
              })}
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
}
