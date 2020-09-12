import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography, Grid, TextField } from "@material-ui/core";
import Tasks from "../Tasks";
import { useDispatch } from "react-redux";
import { taskActions } from "../../actions";

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ title: "", description: "" });

  const handleInputChange = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Grid item xs={12} lg={4} md={6}>
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
                onSubmit={e => {
                  e.preventDefault();
                  if (inputValue.title !== "" && inputValue.title.trim().length >= 1) {
                    dispatch(taskActions.addTask(inputValue));
                    setInputValue({ title: "", description: "" });
                  }
                }}>
                <TextField
                  id="outlined-multiline-static"
                  label="Title"
                  name="title"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={inputValue.title}
                  className={classes.textField}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  name="description"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={inputValue.description}
                  className={classes.textField}
                />
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
              </form>
            </Grid>
          </Grid>
        </Paper>
        <Tasks />
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
      alignContent: "center"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center"
    },
    textField: {
      marginBottom: 20
    }
  })
);
