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
              <Typography variant="h4" style={{ margin: "20px 0px", padding: 20 }}>
                Completed:
              </Typography>
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
