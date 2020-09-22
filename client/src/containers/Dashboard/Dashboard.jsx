import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  Typography,
  Grid,
  TextField,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import Tasks from "../Tasks";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../actions";

export default function Dashboard({ user }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ title: "", description: "" });
  const task = useSelector(state => state.task);
  const auth = useSelector(state => state.auth);

  const handleInputChange = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    dispatch(taskActions.fetchTasks());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Grid container justify="center" style={{ padding: 10 }}>
        <Grid item xs={12} lg={4} md={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <Typography variant="h5">Add A Task:</Typography>
              </Grid>
              <Grid item xs={12}>
                <form
                  className={classes.form}
                  noValidate
                  autoComplete="off"
                  onSubmit={e => {
                    e.preventDefault();
                    if (inputValue.title !== "" && inputValue.title.trim().length >= 1) {
                      dispatch(taskActions.addTask(inputValue));
                      setInputValue({ title: "", description: "" });
                    }
                  }}>
                  <TextField
                    label="Title"
                    name="title"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={inputValue.title}
                    className={classes.textField}
                  />
                  <TextField
                    label="Description"
                    name="description"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={inputValue.description}
                    className={classes.textField}
                  />
                  <Grid container justify="space-between">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        disabled={!(inputValue.title !== "" && inputValue.title.trim().length >= 1)}
                        onClick={() => {
                          dispatch(taskActions.addTask(inputValue));
                          setInputValue({ title: "", description: "" });
                        }}>
                        Submit
                      </Button>
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={<Switch name="switch" color="primary" />}
                        checked={task.showCompleted}
                        onChange={() =>
                          dispatch(taskActions.showCompleted(task.showCompleted ? false : true))
                        }
                        label="Show completed"
                        labelPlacement="start"
                      />
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Paper>
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
