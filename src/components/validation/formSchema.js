import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .email()
    .required("email is required")
    .min(5, "Email must be a minimum of 5 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be 4 characters long"),
});
