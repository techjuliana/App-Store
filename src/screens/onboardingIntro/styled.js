import styled from "styled-components/native";

export const ContainerBtn = styled.TouchableOpacity`
  margin: 14px;
`;

export const TextBtn = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  background-color:${(props) => props.theme.green};
  padding-left:15px;
  padding-right:15px;
  border-radius:20px;
`;