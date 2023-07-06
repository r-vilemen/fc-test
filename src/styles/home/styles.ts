import styled from "styled-components";

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
  border-radius: 0.5rem;
  border: none;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const RecoveryPassword = styled.span`
  color: cyan;
`;
