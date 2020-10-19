import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Tasks from "../Tasks";
import { useDispatch } from "react-redux";
import { appActions, taskActions } from "../../actions";
import TaskForm from "../../components/TaskForm";

export default function Dashboard({ user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.fetchUserData());
    dispatch(taskActions.fetchTasks());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Grid container justify="center" style={{ padding: 10 }}>
        <Grid item xs={12} lg={4} md={6}>
          <TaskForm />
          <Tasks />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => createStyles({}));
