import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px;
  border-color: "#DFDFDf";
  border-radius: 2px;
  margin-bottom: 14px;
  padding: 8px;
`;

export const Title = styled.Text`
  font-weight: "bold";
  font-size: 18;
`;

export const Price = styled.View`
  font-size: 16px;
`;

export const AmountContainer = styled.View`
  margin-top: 14px;
  margin-bottom: 14px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonAdd = styled.View`
  background-color: "green";
  padding: 6px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 2px;
`;

export const ButtonRemove = styled.View`
  background-color: "red";
  padding: 6px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 2px;
`;

export const Amount = styled.View`
  margin-left: 14px;
  margin-right: 14px;
`;