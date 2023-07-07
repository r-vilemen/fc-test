import {
  Container,
  Title,
  UsersContainer,
  IndividualUserContainer,
  UserName,
  UserInfo,
  UserStatus,
} from "@/styles/pages/users/styles";
import users from "../../utils/mock/userMocks";

export default function UsersList() {
  return (
    <Container>
      <Title>Lista de usuários</Title>
      <UsersContainer>
        {users.map((user) => (
          <IndividualUserContainer key={user.nome}>
            <UserName>{user.nome}</UserName>
            <UserInfo>{user.email}</UserInfo>
            <UserInfo>{user.telefone}</UserInfo>
            <UserInfo>{user.cpf}</UserInfo>
            <UserInfo>{user.dataDeNascimento}</UserInfo>
            <UserInfo>{user.nomeDaMae}</UserInfo>
            <br />
            <UserStatus>{user.status}</UserStatus>
          </IndividualUserContainer>
        ))}
      </UsersContainer>
    </Container>
  );
}
