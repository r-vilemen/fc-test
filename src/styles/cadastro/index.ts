import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: 0 10px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin: 20px;
`;

export const UserNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 17px;
`;
