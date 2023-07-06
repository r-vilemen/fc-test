import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  min-width: 700px;
  width: 100vw;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  `;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  `;

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  min-width: 700px;
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

export const PasswordInput = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  padding: 8px 13px;
  border-radius: 4px;
  font-size: 17px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  border: none;
  outline: 0;
  border: 0;
  font-weight: bold;
  background: #222;
  color: #fff;
  width: auto;
  margin-top: 15px;
  padding: 10px 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

export const ErrorMessageYup = styled.p`
  color: red;
`;
