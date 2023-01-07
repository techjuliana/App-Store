import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: "white";
  padding: 14px;
`;

export const CartContent = styled.View`
  flex-direction: "row";
  justify-content: "space-between";
  align-items: "center";
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: "white";
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: "bold";
`;

export const Dot = styled.View`
  align-items: "center";
  justify-content: "center";
  background-color: "yellow";
  width: 20px;
  height: 20px;
  border-radius: 12px;
  position: "absolute";
  z-index: 99px;
  bottom: -2px;
  left: -4px;
`;

export const DotText = styled.Text`
  font-size: 12px;
`;

export const CartButton = styled.TouchableOpacity``;
