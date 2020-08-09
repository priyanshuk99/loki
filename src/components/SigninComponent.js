import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Fab } from "@material-ui/core";
import fire from "./back/fire";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  arrow: {
    display: "flex",
    alignItems: "left",
  },
  rest: {
    marginTop: 20,
  },
  input: {
    marginTop: 0,
    marginBottom: theme.spacing(2),
    padding: 8,
    paddingBottom: 2,
    borderRadius: 28,
    boxShadow: "0 2px 2px 2px #5892F6",
    width: 250,
  },
  inputimg: {
    padding: theme.spacing(1),
    backgroundColor: "#5892F6",
  },
}));

function SignIn({ history }) {
  const classes = useStyles();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className={classes.root}>
      <Link href="/login">
        <img
          src="assets/arrow-left-thick.svg"
          alt="scale"
          className={classes.arrow}
        />
      </Link>
      <section className={classes.rest}>
        <img
          src="assets/scale.png"
          alt="scale"
          height="100px"
          width="100px"
          style={{ marginBottom: 10 }}
        />
        <Typography style={{ fontSize: 28 }} color="primary">
          Sign In
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          Enjoy our application
        </Typography>
      </section>
      <form color="primary" onSubmit={handleLogin}>
        <FormControlLabel
          control={<Checkbox value="mobile" color="primary" />}
          label="Use mobile number"
          style={{
            align: "center",
            display: "flex",
            marginLeft: "10%",
            color: "#5892F6",
          }}
        />

        <br></br>
        <TextField
          placeholder="Email"
          className={classes.input}
          color="primary"
          id="email"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="assets/email.svg"
                  alt="email"
                  className={classes.inputimg}
                />
              </InputAdornment>
            ),
          }}
        />
        <br></br>
        <TextField
          placeholder="Password"
          className={classes.input}
          color="primary"
          id="password"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="assets/key.svg"
                  alt="key"
                  className={classes.inputimg}
                />
              </InputAdornment>
            ),
          }}
        />
        <br></br>
        <Fab
          type="submit"
          color="primary"
          variant="extended"
          style={{
            textTransform: "none",
            width: 150,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Typography>Sign In</Typography>
        </Fab>
      </form>
      <Link href="#" variant="body2">
        Forgot your password?
      </Link>
      <br></br>
      <Link href="/signup" variant="body2">
        New user? Create an account
      </Link>
    </div>
  );
}
export default withRouter(SignIn);
