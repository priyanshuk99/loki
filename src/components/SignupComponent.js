import React, { useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import Badge from "@material-ui/core/Badge";
import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Fab } from "@material-ui/core";
import fire from "./back/fire";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";

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
    height: 15,
    width: 15,
  },
  dp: {
    backgroundColor: "#5892F6",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    padding: 9,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#5892F6",
    width: 13,
    height: 15,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

function SignUp({ history }) {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/login");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const classes = useStyles();
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
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <SmallAvatar alt="Remy Sharp" src="assets/upload.svg" />
          }
        >
          <Avatar className={classes.dp}>
            <InsertPhotoRoundedIcon />
          </Avatar>
        </Badge>
        <Typography
          style={{ fontSize: 28, marginTop: 20, marginBottom: 15 }}
          color="primary"
        >
          Hello, Welcome
        </Typography>
      </section>
      <form color="primary" onSubmit={handleSignUp}>
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
          name="email"
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
          name="password"
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
          <Typography>Sign Up</Typography>
        </Fab>
      </form>
      <Link href="/signin" variant="body2">
        Already have account? Login
      </Link>
      <br></br>
    </div>
  );
}

export default withRouter(SignUp);
