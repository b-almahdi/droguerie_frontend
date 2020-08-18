import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles, InputLabel, MenuItem } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Formik, Field } from "formik";
import { LinearProgress } from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import * as yup from "yup";
const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
const validationSchema = yup.object({
  username: yup.string().email().required(),
  password: yup.string().required().min(8),
});
class loginComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              this.props.logInUser(values, actions, this.props.history);
              console.log(values);
            }}
          >
            {({
              submitForm,
              isSubmitting,
              handleSubmit,
              errors,
              touched,
              status,
            }) => (
              <form className={classes.form} onSubmit={handleSubmit}>
                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                  autoFocus
                  component={TextField}
                  type="email"
                />

                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  component={TextField}
                  // error={errors & errors.msg}
                  //  helperText={errors.msg}
                />

                {isSubmitting && <LinearProgress />}
                {errors && errors.msg}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className={classes.submit}
                  onClick={submitForm}
                >
                  Submit
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}

export default withStyles(styles)(loginComponent);
