import {
  Button,
  createStyles,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../actions";

export default function TaskForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ title: "", description: "" });
  const task = useSelector(state => state.task);

  const handleInputChange = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  return (
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
