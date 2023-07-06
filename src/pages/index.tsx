import {
  Container,
  Input,
  InputGroup,
  WrapperContent,
  RecoveryPassword,
  BtnLogin,
  BtnEye,
  BtnEyeClosed,
  InputPasswordGroup,
} from "@/styles/home/styles";
import Image from "next/image";
import logo from "../assets/images/logo-FC.jpg";
import { useState } from "react";

export default function Home() {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  return (
    <Container>
      <WrapperContent>
        <div>
          <Image width="150" src={logo} alt="logo" />
        </div>

        <InputGroup>
          <InputPasswordGroup>
            <Input placeholder="Login" type="text" />
          </InputPasswordGroup>
          <InputPasswordGroup>
            <Input
              placeholder="Senha"
              type={passwordType ? "password" : "text"}
            />
            {passwordType ? (
              <BtnEye onClick={() => setPasswordType(false)} />
            ) : (
              <BtnEyeClosed onClick={() => setPasswordType(true)} />
            )}
          </InputPasswordGroup>
        </InputGroup>

        <BtnLogin>Entrar</BtnLogin>
        <RecoveryPassword>Redefinir senha</RecoveryPassword>
      </WrapperContent>
    </Container>
  );
}
