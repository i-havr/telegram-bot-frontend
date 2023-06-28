import { styled } from "styled-components";

export const HomePage = styled.main`
  display: block;
  width: 100%;
  min-height: 100%;
`;

export const Section = styled.section`
  display: block;
  max-width: 1600px;
  padding: 64px 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;

  & > h1 {
    margin-bottom: 32px;
    font-size: 22px;
  }

  & > p {
    margin-top: 16px;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    & > h1 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-width: 180px;
  padding: 16px;
  border: 1px solid rgb(57, 147, 243);
  border-radius: 5px;

  @media screen and (min-width: 480px) {
    min-width: 300px;
    padding: 32px;
  }

  & > button {
    width: 50%;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #252f38;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 65%;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: auto;
  padding: 4px;
`;
