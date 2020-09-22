import React from "react";
import { createStyles, Grid, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CheckIcon from "@material-ui/icons/Check";
import UndoIcon from "@material-ui/icons/Undo";
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
              <Typography variant="h5" component="h6">
                {task.title}
              </Typography>
            </Grid>
            <Grid item>{task.description}</Grid>
          </Grid>
        </Grid>
        {!task.completed && (
          <Grid item>
            <IconButton onClick={() => dispatch(taskActions.completeTask(task))}>
              <CheckIcon fontSize="small" />
            </IconButton>
          </Grid>
        )}
        {task.completed && (
          <Grid item>
            <IconButton onClick={() => dispatch(taskActions.uncompleteTask(task))}>
              <UndoIcon fontSize="small" />
            </IconButton>
          </Grid>
        )}
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
      alignItems: "center"
    }
  })
);
