import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "../navbar";
import axios from "axios";

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const AppointmentSchema = yup.object().shape({
  name: yup.string().required("required"),
  // lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  // contact: yup
  //   .string()
  //   .matches(phoneRegExp, "Phone number is not valid")
  //   .required("required"),
  // address1: yup.string().required("required"),
  // address2: yup.string().required("required"),
});

const Booking = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
  };

  const handleFormSubmit = (values) => {
    console.log(values, "1234567890");
    axios.post(`${process.env.REACT_APP_PORT}/addAppointment`, values);
  };

  return (
    <Box>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        maxWidth="50%"
        margin="auto"
        marginTop="5vh"
      >
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={AppointmentSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="phoneNumber"
                  error={!!touched.phoneNumber && !!errors.phoneNumber}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{ gridColumn: "span 4" }}
                />
                <FormControl
                  required
                  variant="filled"
                  sx={{ gridColumn: "span 4" }}
                >
                  <InputLabel id="demo-simple-select-required-label">
                    Time Schedule
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={values?.time}
                    label="Time Schedule"
                    name="time"
                    defaultValue=""
                    onBlur={handleBlur}
                    error={!!touched.time && !!errors.time}
                    helperText={touched.time && errors.time}
                    onChange={handleChange}
                  >
                    <MenuItem value="09:30 AM - 12:30 PM">
                      09:30 AM - 12:30 PM
                    </MenuItem>
                    <MenuItem value="12:30 AM - 03:30 PM">
                      12:30 AM - 03:30 PM
                    </MenuItem>
                    <MenuItem value="03:30 AM - 7:30 PM">
                      03:30 AM - 7:30 PM
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.date}
                  name="date"
                  error={!!touched.date && !!errors.date}
                  helperText={touched.date && errors.date}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Book Appointment
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Booking;
