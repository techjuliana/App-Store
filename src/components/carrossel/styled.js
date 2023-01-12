import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.red};
`;

export const Imagens = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 14px;
  margin: 25px;
`;
