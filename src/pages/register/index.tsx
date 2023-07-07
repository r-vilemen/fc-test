// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {
  Container,
  Title,
  TitleContainer,
  Form,
  UserNameContainer,
  Input,
  PasswordContainer,
  Label,
  SubmitButton,
  PasswordInput,
  ErrorMessageYup,
} from "../../styles/pages/cadastro/styles";
import { registrationSchema } from "@/utils/joySchemas/schema";
import bcrypt from "bcryptjs";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import { db } from "../../services/firebaseConnection";

export default function Registro() {
  const router = useRouter();
  // const [data, setData] = useState([])
  // register e handleSubmit vem do React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data: any) => {
    // localStorage.setItem(data.fullName, data)

    try {
      const auth = getAuth();

      const hashedPassword = bcrypt.hashSync(data.password, 10);

      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        hashedPassword
      );

      await addDoc(collection(db, "usuários"), {
        ...data,
        password: undefined,
        userId: user.uid,
      });
      router.push("/");
      toast.success("Usuário cadastrado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar usuário");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleContainer>
          <Title>Formulário de cadastro</Title>
        </TitleContainer>
        <UserNameContainer>
          <Label>Nome completo</Label>
          <Input type="text" {...register("fullName")} />
          <ErrorMessageYup>
            {errors.fullName?.message as React.ReactNode}
          </ErrorMessageYup>
          <Label>Login</Label>
          <Input type="text" {...register("username")} />
          <ErrorMessageYup>
            {errors.username?.message as React.ReactNode}
          </ErrorMessageYup>
        </UserNameContainer>
        <PasswordContainer>
          <Label>Senha</Label>
          <PasswordInput type="password" {...register("password")} />
          <ErrorMessageYup>
            {errors.password?.message as React.ReactNode}
          </ErrorMessageYup>
          <Label>Confirme sua senha</Label>
          <PasswordInput type="password" {...register("confirmPassword")} />
          <ErrorMessageYup>
            {errors.confirmPassword?.message as React.ReactNode}
          </ErrorMessageYup>
        </PasswordContainer>
        <Label>E-mail</Label>
        <Input type="email" {...register("email")} />
        <ErrorMessageYup>
          {errors.email?.message as React.ReactNode}
        </ErrorMessageYup>
        <Label>Telefone/Celular</Label>
        <Input type="number" {...register("phoneNumber")} />
        <ErrorMessageYup>
          {errors.phoneNumber?.message as React.ReactNode}
        </ErrorMessageYup>
        <Label>CPF</Label>
        <Input type="number" {...register("cpf")} />
        <ErrorMessageYup>
          {errors.cpf?.message as React.ReactNode}
        </ErrorMessageYup>
        <Label>Data de nascimento</Label>
        <Input type="text" {...register("dateOfBirth")} />
        <ErrorMessageYup>
          {errors.dateOfBirth?.message as React.ReactNode}
        </ErrorMessageYup>
        <Label>Nome da mãe</Label>
        <Input type="text" {...register("motherName")} />
        <ErrorMessageYup>
          {errors.motherName?.message as React.ReactNode}
        </ErrorMessageYup>
        <div>
          <Label>Status</Label>
          <select {...register("status")}>
            <option>--Selecione--</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
          <ErrorMessageYup>
            {errors.status?.message as React.ReactNode}
          </ErrorMessageYup>
        </div>
        <SubmitButton type="submit">Confirmar</SubmitButton>
      </Form>
    </Container>
  );
}
