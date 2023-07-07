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
  Form,
} from "@/styles/pages/home/styles";
import Image from "next/image";
import logo from "../assets/images/logo-FC.jpg";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    router.push("/register");
  }

  return (
    <Container>
      <WrapperContent>
        <Form onSubmit={handleSubmit}>
          <div>
            <Image src={logo} alt="logo" width={150} />
          </div>

          <InputGroup>
            <InputPasswordGroup>
              <Input
                onChange={(event: any) => setInputValue(event.target.value)}
                placeholder="Login"
                type="text"
              />
            </InputPasswordGroup>
            <InputPasswordGroup>
              <Input
                onChange={(event: any) => setInputValue2(event.target.value)}
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

          <BtnLogin disabled={inputValue === "" || inputValue2 === ""}>
            Entrar
          </BtnLogin>
          <RecoveryPassword>Redefinir senha</RecoveryPassword>
        </Form>
      </WrapperContent>
    </Container>
  );
}
