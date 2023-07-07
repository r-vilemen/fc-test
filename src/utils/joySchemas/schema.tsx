import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("O campo de nome completo é obrigatório.")
    .min(6),
  username: yup.string().required("O campo de login é obrigatório.").min(6),
  password: yup.string().required("O campo de senha é obrigatório.").min(6),
  confirmPassword: yup
    .string()
    .required("O campo de senha é obrigatório.")
    .min(6)
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
  email: yup.string().required("O campo de e-mail é obrigatório.").email(),

  phoneNumber: yup
    .string()
    .required("O campo de número de telefone é obrigatório.")
    .length(11),
  cpf: yup
    .string()
    .required("O campo CPF é obrigatório.")
    .test("valid-cpf", "CPF inválido.", (value) => {
      if (!value) return false;

      const cleanedCPF = value.replace(/[.-]/g, "");

      if (cleanedCPF.length !== 11) return false;

      return true;
    }),
  dateOfBirth: yup
    .string()
    .required("O campo de data de nascimento é obrigatório."),
  motherName: yup.string().required("O campo de nome da mãe é obrigatório."),
  status: yup
    .string()
    .oneOf(["Ativo", "Inativo"], "Selecione uma opção válida.")
    .required("O campo de status é obrigatório."),
});
