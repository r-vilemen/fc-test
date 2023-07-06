import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 1024px;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 0 10px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const UserNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  padding: 8px 13px;
  border-radius: 4px;
  font-size: 17px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  border: none;
  outline: 0;
  border: 0;
  background: #222;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
  }
`;
