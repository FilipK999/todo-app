import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import Tasks from "../Tasks";
import { useDispatch } from "react-redux";
import { taskActions } from "../../actions";
import TaskForm from "../../components/TaskForm";

export default function Dashboard({ user }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
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

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    textField: {
      marginBottom: 20
    }
  })
);
