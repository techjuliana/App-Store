import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  text-align: center;
`;

export const Imagem = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Botao = styled.TouchableOpacity`
  position: absolute;
  z-index: 5;
  top: 89%;
  left: 30%;
  padding: 20px;
  background-color: ${(props) => props.theme.green};
  border-radius:30px;
`;
