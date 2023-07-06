import {
  Container,
  Input,
  InputGroup,
  WrapperContent,
  RecoveryPassword,
} from "@/styles/home/styles";
import Image from "next/image";
import logo from "../assets/images/logo-FC.jpg";
import { useState } from "react";

export default function Home() {
  const [PasswordType, setPasswordType] = useState<boolean>(true);
  return (
    <Container>
      <WrapperContent>
        <div>
          <Image width="150" src={logo} alt="logo" />
        </div>

        <InputGroup>
          <Input placeholder="Login" type="text" />
          <div>
            <Input
              placeholder="Senha"
              type={PasswordType ? "password" : "text"}
            />
          </div>
        </InputGroup>

        <button>Entrar</button>
        <RecoveryPassword>Redefinir senha</RecoveryPassword>
      </WrapperContent>
    </Container>
  );
}
