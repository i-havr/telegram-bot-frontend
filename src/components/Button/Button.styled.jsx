import styled from "styled-components";

export const Button = styled.button`
  min-width: 80px;
  max-width: 50%;
  font-family: "Roboto";
  font-size: 14px;
  padding: 4px 8px;
  border: 1px solid;
  border-radius: 3px;
  background-color: rgb(57, 147, 243);
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgb(22, 115, 214);
  }
`;

export const SendBtn = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
