import styled from "styled-components";
import { Eye, EyeOff } from "styled-icons/ionicons-outline";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const WrapperContent = styled.div`
  display: flex;
  width: 20rem;
  height: 25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputGroup = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

export const Input = styled.input`
  height: 2rem;
  width: 65%;
  border-radius: 0.5rem;
  border: none;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0 1.3rem;

  &:focus {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    &::placeholder {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  &:nth-last-child {
    padding-right: 4rem;
  }
`;

export const RecoveryPassword = styled.span`
  width: 65%;
  color: gray;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1rem;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const BtnLogin = styled.button`
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export const InputPasswordGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnEye = styled(Eye)`
  width: 1.5rem;
  position: absolute;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-right: -9rem;
  cursor: pointer;
`;

export const BtnEyeClosed = styled(EyeOff)`
  width: 1.5rem;
  position: absolute;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-right: -9rem;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
