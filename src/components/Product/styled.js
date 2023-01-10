import styled from "styled-components/native";

export const Container = styled.View`
  border-width: 4px;
  border-color: ${(props) => props.theme.yellow};
  border-radius: 10px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-bottom: 14px;
  padding: 8px;
  padding-bottom: 14px;
  padding-top: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 17px;
  color: ${(props) => props.theme.black};
`;

export const Price = styled.Text`
  color: ${(props) => props.theme.black};
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 12px;
`;

export const Imagem = styled.Image`
  border-radius: 10px;
  width: 300px;
  height: 120px;
  border-top-left-radius: 40px;
`;

export const ContainerList = styled.View``;
