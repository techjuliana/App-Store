import styled from "styled-components/native";

export const Container = styled.View`
  border-width: 1px;
  border-color: "#DFDFDF";
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
`;

export const Price = styled.Text`
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
