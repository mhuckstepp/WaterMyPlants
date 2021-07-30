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
    .min(4, "Password must be at least 4 characters long"),
  city: yup.string().min(2, "city must be at least 2 characters long"),
});
