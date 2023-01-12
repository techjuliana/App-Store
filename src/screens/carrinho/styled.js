import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.orange};
  padding: 14px;
`;

export const Total = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
  color: ${(props) => props.theme.white};
  text-align:center;
`;

export const BotaoFinalizar = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.green};
  text-align:center;
  border-radius:20px;
  padding:10px;
`;
