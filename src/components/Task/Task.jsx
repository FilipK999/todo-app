import React from "react";
import { createStyles, Grid, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { useDispatch } from "react-redux";
import { taskActions } from "../../actions";

export default function Task({ task }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grid item xs={12}>
      <Paper className={classes.task}>
        <Grid container justify="space-between">
          <Grid item>
            <Grid item>
              <Typography variant="h6">{task.title}</Typography>
            </Grid>
            <Grid item>{task.description}</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton onClick={() => dispatch(taskActions.deleteTask(task))}>
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Paper>
    </Grid>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    task: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center"
    }
  })
);
