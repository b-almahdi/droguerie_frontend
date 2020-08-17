import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Container, TextField } from "@material-ui/core";

import * as yup from "yup";
import { Grid } from "@material-ui/core";

const validationSchema = yup.object({
  prenom: yup.string().required("First Name is required").max(20),
  nom: yup.string().required("Last Name is required").max(20),
  username: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("password required").min(8),
  telephone: yup.string().required("Phone required").max(20),
  adresse: yup.string().required("adresse required").min(8),
});
export class signUpComponent extends Component {
  render() {
    const paper = {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    return (
      <>
        <Formik
          initialValues={{
            prenom: "",
            nom: "",
            username: "",
            password: "",
            telephone: "",
            adresse: "",
          }}
          onSubmit={(values) => {
            //   // setFormData(values);
            //   // nextStep();
            this.props.addUser(values, this.props.history);

            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleSubmit }) => (
            <div style={{ paper }}>
              <Container component="main" maxWidth="xs">
                <Form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="prenom"
                        label="Prénom *"
                        margin="normal"
                        value={values.prenom}
                        as={TextField}
                        error={touched.prenom && errors.prenom}
                        helperText={touched.prenom && errors.prenom}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="nom"
                        label="Nom *"
                        margin="normal"
                        value={values.nom}
                        as={TextField}
                        error={touched.nom && errors.nom}
                        helperText={touched.nom && errors.nom}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        type="email"
                        name="username"
                        label="Email *"
                        margin="normal"
                        value={values.username}
                        as={TextField}
                        error={touched.username && errors.username}
                        helperText={touched.username && errors.username}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        type="password"
                        name="password"
                        label="Password *"
                        margin="normal"
                        value={values.password}
                        as={TextField}
                        error={touched.password && errors.password}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        type="telephone"
                        name="telephone"
                        label="telephone *"
                        margin="normal"
                        value={values.telephone}
                        as={TextField}
                        error={touched.telephone && errors.telephone}
                        helperText={touched.telephone && errors.telephone}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        type="text"
                        name="adresse"
                        label="adresse *"
                        margin="normal"
                        value={values.adresse}
                        as={TextField}
                        error={touched.adresse && errors.adresse}
                        helperText={touched.adresse && errors.adresse}
                      />
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Form>
              </Container>
            </div>
          )}
        </Formik>
      </>
    );
  }
}

export default signUpComponent;
