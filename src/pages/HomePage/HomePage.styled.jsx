import styled from "@emotion/styled";

export const HomePage = styled.main`
  display: block;
  width: 100%;
  min-height: 100%;
`;

export const Section = styled.section`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80%;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40vh;
`;

export const ButtonStyled = styled.button`
  padding: 4px 16px;
  background-color: hotpink;
  font-size: 32px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
