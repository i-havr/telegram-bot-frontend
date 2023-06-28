import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NotFoundPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0;
  border: 0;
  padding: 64px 40px;
  color: #252f38;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  color: #252f38;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  color: #252f38;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;

  text-decoration: none;
  & > button {
    min-width: 20%;
    padding: 5px 10px;
    color: #f2f2f2;
  }
`;
