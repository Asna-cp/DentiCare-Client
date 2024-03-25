import * as React from "react";
import Footer from "../footer";

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
import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const AppointmentSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
});

const Booking = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [count, setCount] = useState();

  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const handleChange1 = (event) => {
    setSelectedDate(event.target.value);
  };

  //PAYPAL FOR PAYMENT
  const [isPaypal, setIsPaypal] = useState(false);
  const [formData, setFormData] = useState({});
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
  };

  const handleFormSubmit = async (values) => {
       const { data } = await axios.get(
      `${process.env.REACT_APP_PORT}/addAppointment?time=${values.time}&date=${values.date}`
    );
    setCount(data);

    if (count < 4) {

      const formValue = values;
      setFormData(formValue);

      setIsPaypal(true);
    } else {
      alert("Slots fulled ,change your time");
    }
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: 500,
          },
        },
      ],
    });
  };
  const onApprove = async (data, actions) => {
    axios.post(`${process.env.REACT_APP_PORT}/addAppointment`, formData);
    window.location.reload();
    return actions.order.capture();
  };

  //LIMIT FOR APPOINTMENTS
  const countLimit = async (time) => {
 
    // alert(data);
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
        marginBottom="5vh"
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
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
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
                    <MenuItem
                      onClick={() => countLimit("09:30 AM - 12:30 PM")}
                      value="09:30 AM - 12:30 PM"
                    >
                      09:30 AM - 12:30 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => countLimit("12:30 AM - 03:30 PM")}
                      value="12:30 AM - 03:30 PM"
                    >
                      12:30 AM - 03:30 PM
                    </MenuItem>
                    <MenuItem
                      onClick={() => countLimit("03:30 AM - 7:30 PM")}
                      value="03:30 AM - 7:30 PM"
                    >
                      03:30 AM - 7:30 PM
                    </MenuItem>
                  </Select>
                  {count > 5 && <p>Slots full</p>}
                </FormControl>
                <TextField
                  id="date"
                  label="Select Date"
                  type="date"
                  value={selectedDate} // Use selectedDate state
                  onChange={handleChange1} // Use handleChange function
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: today, // Set minimum date to today's date
                  }}
                  sx={{ gridColumn: "span 4" }}
                />

                <TextField
                  id="date"
                  label="Select Date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: today, // Set minimum date to today's date
                  }}
                />
              </Box>
              <Box justifyContent="end" mt="20px">
                {isPaypal ? (
                  <PayPalScriptProvider>
                    <PayPalButtons
                      createOrder={(data, actions) =>
                        createOrder(data, actions)
                      }
                      onApprove={(data, actions) => onApprove(data, actions)}
                    />
                  </PayPalScriptProvider>
                ) : (
                  <Button type="submit" color="secondary" variant="contained">
                    Book Appointment
                  </Button>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Footer />
    </Box>
  );
};

export default Booking;
