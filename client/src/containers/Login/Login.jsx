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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../actions";
import Error from "../../components/Error";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleFormChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={11} md={6} lg={4}>
          <Grid
            container
            className={classes.error}
            style={{ visibility: auth.errorMessage ? "visible" : "hidden" }}>
            <Error message={auth.errorMessage} />
          </Grid>

          <Paper className={classes.paper} elevation={5}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <form>
                  <FormControl className={classes.form}>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input
                      id="email"
                      name="email"
                      value={form.email}
                      type="email"
                      autoComplete="username"
                      onChange={handleFormChange}
                    />
                  </FormControl>
                  <FormControl className={classes.form}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={form.password}
                      onChange={handleFormChange}
                    />
                  </FormControl>

                  <Grid item xs={12} lg={12} className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth={true}
                      style={{ padding: 10 }}
                      onClick={async e => {
                        e.preventDefault();
                        auth.errorMessage && dispatch(authActions.clearError());
                        await dispatch(authActions.loginUser(form));
                      }}>
                      Log in
                    </Button>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={12} lg={12} className={classes.buttonContainer}>
                <Button
                  fullWidth={true}
                  onClick={() => {
                    auth.errorMessage && dispatch(authActions.clearError());
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
    },
    error: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(-3)
    }
  })
);
