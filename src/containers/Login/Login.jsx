import {
  Button,
  createStyles,
  FormControl,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  Paper
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper} elevation={5}>
            <Grid container justify="center">
              <Grid item xs={12}>
                {/* <form noValidate autoComplete="off" className={classes.form}>
                  <TextField label="Email" />
                  <TextField label="Password" />
                </form> */}
                <FormControl className={classes.form}>
                  <InputLabel htmlFor="email">Email address</InputLabel>
                  <Input id="email" />
                </FormControl>
                <FormControl className={classes.form}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input id="password" />
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={12} className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                  style={{ padding: 10 }}
                  onClick={() => {
                    history.push("/dashboard");
                  }}>
                  Log in
                </Button>
                <Button
                  fullWidth={true}
                  onClick={() => {
                    history.push("/register");
                  }}>
                  Register an account
                </Button>
              </Grid>
            </Grid>
          </Paper>
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
      alignItems: "center",
      justifyContent: "center"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 10
    },
    buttonContainer: {
      "&>*": {
        marginTop: 25
      }
    }
  })
);
