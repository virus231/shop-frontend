import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});