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
} from "../../styles/cadastro/styles";

export default function Registro() {
  function HandleSubmit() {}

  return (
    <Container>
      <Form onSubmit={() => HandleSubmit()}>
        <TitleContainer>
          <Title>Formulário de cadastro</Title>
        </TitleContainer>
        <UserNameContainer>
          <Label>Nome completo</Label>
          <Input type="text" />
          <Label>Login</Label>
          <Input type="text" />
        </UserNameContainer>
        <PasswordContainer>
          <Label>Senha</Label>
          <Input type="password" />
          <Label>Confirme sua senha</Label>
          <Input type="password" />
        </PasswordContainer>
        <Label>E-mail</Label>
        <Input type="text" />
        <Label>Telefone/Celular</Label>
        <Input type="text" />
        <Label>Data de nascimento</Label>
        <Input type="text" />
        <Label>Nome da mãe</Label>
        <Input type="text" />
        <div>
          <Label>Status</Label>
          <select>
            <option>Selecione</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>
        <SubmitButton type="button">Confirmar</SubmitButton>
      </Form>
    </Container>
  );
}
