import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";


const theme = createTheme();
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword:"",
};
const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "name cant be more than 100 characters")
    .required("required"),
  email: yup.string().email("Invalid email").required("required"),
  password: yup
    .string()
    .min(6, "Minimum eight characters, at least one letter and one number:")
    .required("required"),
});
const Register = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    axios
      .post("http://localhost:8080/api/v1/user/register", event)
      .then((response) => {
        navigate("/login");
      }).catch((error)=>{
     
      });
    // event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${"../../Images/clinic.jpeg"})`,
          margin: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={userSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="name"
                        onChange={handleChange}
                        fullWidth
                        id="name"
                        label="First Name"
                        autoFocus
                        onBlur={handleBlur}
                        value={values.name}
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="email"
                        onChange={handleChange}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onBlur={handleBlur}
                        value={values.email}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmpassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmpassword}
                        error={!!touched.confirmpassword && !!errors.confirmpassword}
                        helperText={touched.confirmpassword && errors.confirmpassword}
                      />
                    </Grid>
                   
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/login" variant="body2">
                        Already have an account? Login 
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Register;
