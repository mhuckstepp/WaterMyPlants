import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email is required")
    .min(5, "Email must be a minimum of 5 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be 4 characters long"),
  location: yup
    .string()
    .required("City is required")
    .min(2, "City must be at least 2 characters long"),
});
