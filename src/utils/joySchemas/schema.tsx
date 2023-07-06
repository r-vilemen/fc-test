import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  fullName: yup.string().required().min(6),
  username: yup.string().required().min(6),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .required()
    .min(6)
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  email: yup.string().required().email(),
  phoneNumber: yup.string().required().length(11),
  dateOfBirth: yup.string().required(),
  motherName: yup.string().required(),
});
