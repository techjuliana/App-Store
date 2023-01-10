import styled from "styled-components/native";

export const Container = styled.View`
  border-width: 1px;
  /* border-color: "#DFDFDF"; */
  /* color: ${(props) => props.theme.white}; */
  border-radius: 2px;
  margin-bottom: 14px;
  padding: 8px;
  padding-bottom: 14px;
  padding-top: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size:17px;
  color: ${(props) => props.theme.white};
`;

export const Price = styled.Text`
  color: ${(props) => props.theme.white};
  font-size:15px;
  font-weight: bold;
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 12px;
`;

export const Imagem = styled.Image`
  border-radius: 10px;
  width: 200px;
  height: 120px;
`;
