import styled from "styled-components/native";

export const Container = styled.View`
  border-width: 4px;
  border-color: ${(props) => props.theme.green};
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

export const Imagem = styled.Image`
  width: 189px;
  height: 100px;
  border-radius: 10px;
  border-top-left-radius: 40px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.black};
  font-weight: bold;
  font-size: 18px;
`;

export const Price = styled.Text`
  color: ${(props) => props.theme.black};
  font-size: 16px;
`;

export const AmountContainer = styled.View`
  margin-top: 14px;
  margin-bottom: 14px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: green;
  padding: 6px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 2px;
`;

export const ButtonRemove = styled.TouchableOpacity`
  background-color: red;
  padding: 6px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 2px;
`;

export const Amount = styled.Text`
  padding: 10px;
  margin-left: 14px;
  margin-right: 14px;
  color: ${(props) => props.theme.black};
`;
