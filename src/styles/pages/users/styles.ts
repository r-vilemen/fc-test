import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #da0812;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #fff;
`;

export const UsersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  height: 80%;
  border-radius: 4px;
  background-color: #fff;
`;

export const IndividualUserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 30px;
  margin: 20px 0;
`;

export const UserName = styled.h2`
  font-weight: bold;
  text-align: left;
  margin: 5px;
`;

export const UserInfo = styled.p`
  text-align: left;
  margin: 3px;
`;

export const UserStatus = styled.h2`
  font-weight: bolder;
`;
