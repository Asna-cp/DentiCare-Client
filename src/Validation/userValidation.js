import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/^\s*\S.*$/, 'Whitespace is not allowed')
        .required("required"),

    email: yup
        .string().email()
        .required("required"),

    phonenum: yup
        .string()
        .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
        .required("required"),

    password: yup
        .string()
        .min(5, 'Password must be at least 5 characters')
        .max(30, 'Password must be at most 30 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        .required("required"),

});